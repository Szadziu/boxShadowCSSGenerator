import { useRef, useState } from "react";
import * as P from "./parts";

const DraggableItem = ({
  slider,
  min,
  max,
  setPosition,
  position,
  setValue,
  value,
}) => {
  const itemRef = useRef();
  const [isDrag, setIsDrag] = useState(false);

  const dragItem = (e) => {
    startDrag();
  };

  const moveItem = (e) => {
    const { left, right } = slider.current.getBoundingClientRect();
    const step = (right - left) / max;

    if (isDrag) {
      setPosition(e.clientX - left - 12.5);
      setValue(Math.floor(position / step + 1));
    }
    if (e.clientX < left) setPosition(0);
    if (e.clientX > right) setPosition(right - left - 50);
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
      {value}
    </P.Item>
  );
};

export default DraggableItem;
