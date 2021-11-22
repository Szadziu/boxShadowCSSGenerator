import { useState, useRef } from "react";
import DraggableItem from "../DraggableItem/DraggableItem";

import * as P from "./parts";

const PropertySlider = ({ name, min, max }) => {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(0);

  const setChoosenPosition = (e) => {
    const { left } = sliderRef.current.getBoundingClientRect();
    setPosition(e.clientX - left - 25);
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
          />
        </P.Slider>
      </P.Wrapper>
    </>
  );
};

export default PropertySlider;
