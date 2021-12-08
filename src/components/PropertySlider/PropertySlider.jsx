import { useState, useRef } from "react";
import DraggableItem from "../DraggableItem/DraggableItem";

import * as P from "./parts";

//! extract to global variables if its used in any other place
const DRAGGABLE_WIDTH = 50;

const PropertySlider = ({ name, min, max, value, setValue }) => {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(0);

  const setChoosenPosition = (e) => {
    const { left, right } = sliderRef.current.getBoundingClientRect();
    setPosition(e.clientX - left - DRAGGABLE_WIDTH / 2);
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
