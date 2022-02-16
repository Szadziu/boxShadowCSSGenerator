import { useEffect, useRef, useState } from 'react';
import * as P from './parts';
// import useWindowDimensions from '../hooks/useWindowDimensions';

const DRAGGABLE_ITEM_WIDTH = 50;

const DraggableItem = ({
  min,
  max,
  setValue,
  value,
  setPosition,
  position,
  setStartPosition,
}) => {
  const [parentElement, setParentElement] = useState(null);
  const testRef = useRef();
  // const { width, height } = useWindowDimensions();

  // useEffect(() => {
  //   setStartPosition();
  // }, [width, height]);

  useEffect(() => {
    setParentElement(testRef.current.parentElement);
  }, []);

  const moveItem = (e) => {
    const { width, left } = parentElement.getBoundingClientRect();

    let newPosition = e.clientX - left;

    if (newPosition < 0) newPosition = 0;
    else if (newPosition > width) newPosition = width;

    if (newPosition < 0) {
      setValue(min);
      return;
    }
    if (newPosition > width) {
      setValue(max);
      return;
    }

    const step = width / (max - min);
    const newValue = Math.floor(newPosition / step + min);

    setValue(newValue);
    setPosition(newPosition - DRAGGABLE_ITEM_WIDTH / 2);
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
