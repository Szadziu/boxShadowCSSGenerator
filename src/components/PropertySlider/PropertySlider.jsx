import { useState, useRef, createContext } from "react";
import DraggableItem from "../DraggableItem/DraggableItem";

import * as P from "./parts";

export const ValueContext = createContext();

const PropertySlider = ({ name, min, max }) => {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [value, setValue] = useState(min);

  const setChoosenPosition = (e) => {
    const { left, right } = sliderRef.current.getBoundingClientRect();
    setPosition(e.clientX - left - 25);
    // setValue(Math.floor(position / (right - left / max)));
  };

  return (
    <>
      <P.Wrapper>
        <P.PropertyName>{name}</P.PropertyName>
        <P.Slider ref={sliderRef} onClick={setChoosenPosition}>
          <DraggableItem
            slider={sliderRef}
            min={min}
            max={max}
            setPosition={setPosition}
            position={position}
            setValue={setValue}
            value={value}
          />
        </P.Slider>
      </P.Wrapper>
    </>
  );
};

export default PropertySlider;
