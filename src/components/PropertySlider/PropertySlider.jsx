import { useState, useRef } from "react";
import DraggableItem from "../DraggableItem/DraggableItem";

import * as P from "./parts";

const PropertySlider = ({ name, min, max }) => {
  const sliderRef = useRef(null);

  return (
    <>
      <P.Wrapper>
        <P.PropertyName>{name}</P.PropertyName>
        <P.Slider ref={sliderRef}>
          <DraggableItem slider={sliderRef} min={min} max={max} />
        </P.Slider>
      </P.Wrapper>
    </>
  );
};

export default PropertySlider;
