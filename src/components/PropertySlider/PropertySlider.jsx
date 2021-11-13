import { useState, useRef } from "react";
import DraggableItem from "../DraggableItem/DraggableItem";

import * as P from "./parts";

const PropertySlider = ({ name }) => {
  const dragRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [itemPosition, setItemPosition] = useState(0);

  const moveItem = (e) => {
    if (isDrag) {
      console.log(e.clientX);
    }
  };

  const dragItem = (e) => {
    moveItem(e);
  };

  const dragStart = (e) => {
    console.log(e.clientX);
    setIsDrag(true);
  };

  const dragStop = () => {
    setIsDrag(false);
    console.log("stop");
  };

  // const elementX = dragRef.current.getBoundingClientRect().x;

  return (
    <>
      <P.Wrapper>
        <P.PropertyName>{name}</P.PropertyName>
        <P.Slider>
          <DraggableItem
            position={itemPosition}
            ref={dragRef}
            onMouseDown={dragStart}
            onMouseUp={dragStop}
            onMouseMove={dragItem}
          />
        </P.Slider>
      </P.Wrapper>
    </>
  );
};

export default PropertySlider;
