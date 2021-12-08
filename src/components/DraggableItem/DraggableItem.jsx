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
  // const [isDrag, setIsDrag] = useState(false);

  // const dragItem = (e) => {
  //   startDrag();
  // };

  const moveItem = (e) => {
    const { width, left, right } = slider.current.getBoundingClientRect();
    const step = width / max;

    console.log(`%c ${position}`, "color: red");
    // if (isDrag) {
    console.log(Math.floor(position / step + min));
    setPosition(e.clientX - left - 12.5);
    setValue(Math.floor(position / step + min));
    // }
    if (e.clientX < left) setPosition(0);
    if (e.clientX > right) setPosition(right - left - 50);
  };

  const startDrag = () => {
    // setIsDrag(true);
    document.addEventListener("mousemove", moveItem);
    document.addEventListener("mouseup", stopDrag);
  };

  const stopDrag = () => {
    // setIsDrag(false);
    document.removeEventListener("mousemove", moveItem);
    document.removeEventListener("mouseup", stopDrag);
  };
  return (
    <P.Item
      onMouseDown={startDrag}
      // onMouseLeave={stopDrag}
      // onMouseUp={stopDrag}
      // onMouseMove={moveItem}
      ref={itemRef}
      position={position}
    >
      {value}
    </P.Item>
  );
};

export default DraggableItem;
