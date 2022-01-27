import { useState, useRef, useEffect } from 'react';
import DraggableItem from '../DraggableItem/DraggableItem';
import * as P from './parts';

const DRAGGABLE_WIDTH = 50;

const PropertySlider = ({
  name,
  min,
  max,
  onChange = () => {},
  value,
  setValue,
}) => {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(0);

  const setChoosenPosition = (e) => {
    const { left, width } = sliderRef.current.getBoundingClientRect();

    const mouseX = e.clientX - left - DRAGGABLE_WIDTH / 2;
    const pixelsPerValue = width / (max - min + min);
    const newValue = Math.floor(mouseX / pixelsPerValue);

    setPosition(mouseX);
    setValue(newValue);
  };

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <>
      <P.Wrapper>
        <P.PropertyName>{name}</P.PropertyName>
        <P.Slider ref={sliderRef} onClick={setChoosenPosition}>
          <DraggableItem
            min={min}
            max={max}
            position={position}
            setPosition={setPosition}
            setValue={setValue}
            value={value}
          />
        </P.Slider>
      </P.Wrapper>
    </>
  );
};

export default PropertySlider;
