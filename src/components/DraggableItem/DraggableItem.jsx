import { useRef, useState } from "react";
import * as P from "./parts";

const DraggableItem = ({ slider }) => {
  const itemRef = useRef();
  const [isDrag, setIsDrag] = useState(false);
  const [position, setPosition] = useState(0);

  const dragItem = (e) => {
    startDrag();
  };

  const moveItem = (e) => {
    const { left, right } = slider.current.getBoundingClientRect();
    if (isDrag) {
      setPosition(e.clientX - left - 12.5);
    }
    if (e.clientX < left) setPosition(0);
    if (e.clientX > right) setPosition(right - left - 25);
  };

  const startDrag = () => {
    setIsDrag(true);
  };

  const stopDrag = () => {
    setIsDrag(false);
  };
  return (
    <P.Item
      onMouseDown={dragItem}
      onMouseLeave={stopDrag}
      onMouseUp={stopDrag}
      onMouseMove={moveItem}
      ref={itemRef}
      position={position}
    >
      10
    </P.Item>
  );
};

export default DraggableItem;
