import * as P from "./parts";

const DraggableItem = ({ onMouseDown, onMouseUp, onMouseMove, position }) => {
  return (
    <P.Item
      position={position}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      10
    </P.Item>
  );
};

export default DraggableItem;
