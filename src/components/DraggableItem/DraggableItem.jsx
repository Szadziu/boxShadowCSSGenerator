import { useEffect, useRef, useState } from 'react';
import * as P from './parts';

const DRAGGABLE_ITEM_WIDTH = 50;

const DraggableItem = ({ min, max, setValue, value }) => {
  const [position, setPosition] = useState(0);
  const [parentElement, setParentElement] = useState(null);
  const testRef = useRef();

  useEffect(() => {
    console.log(testRef);
    setParentElement(testRef.current.parentElement);
  }, []);

  const moveItem = (e) => {
    const { width, left } = parentElement.getBoundingClientRect();

    // if x > width -> stop
    let newPosition = e.clientX - left - DRAGGABLE_ITEM_WIDTH / 2;

    if (newPosition < 0) newPosition = 0;
    else if (newPosition > width) newPosition = width;

    const mouseX = e.clientX - left - DRAGGABLE_ITEM_WIDTH / 2;

    if (mouseX < 0) {
      setValue(min);
      return;
    }
    if (mouseX > width) {
      setValue(max);
      return;
    }

    const pixelsPerValue = width / (max - min + min);
    const newValue = Math.round(mouseX / pixelsPerValue);

    setValue(newValue);
    setPosition(newPosition);
  };

  const startDrag = (e) => {
    document.addEventListener('mousemove', moveItem);
    document.addEventListener('mouseup', stopDrag);
  };

  const stopDrag = () => {
    document.removeEventListener('mousemove', moveItem);
    document.removeEventListener('mouseup', stopDrag);
  };

  return (
    <P.Item onMouseDown={startDrag} position={position} ref={testRef}>
      {value}
    </P.Item>
  );
};

export default DraggableItem;
