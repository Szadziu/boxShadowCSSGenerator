import { useContext } from 'react';
import PropertySlider from '../PropertySlider/PropertySlider';
import BoxShadowContext from '../../contexts/boxShadowContext';
import * as P from './parts';

const UserPanel = () => {
  const {
    offsetX,
    setOffsetX,
    offsetY,
    setOffsetY,
    blur,
    setBlur,
    spread,
    setSpread,
    currentColor,
    setCurrentColor,
  } = useContext(BoxShadowContext);

  const pickColor = (e) => {
    setCurrentColor(e.target.value);
  };

  return (
    <P.Panel>
      <PropertySlider
        value={offsetX}
        setValue={setOffsetX}
        name='offset x'
        min={10}
        max={100}
      />
      <PropertySlider
        value={offsetY}
        setValue={setOffsetY}
        name='offset y'
        min={0}
        max={100}
      />
      <PropertySlider
        value={spread}
        setValue={setSpread}
        name='spread'
        min={0}
        max={100}
      />
      <PropertySlider
        value={blur}
        setValue={setBlur}
        name='blur'
        min={0}
        max={100}
      />
      <P.TextPicker
        type='text'
        value={`box-shadow: ${offsetX}px ${offsetY}px ${spread}px ${blur}px ${currentColor}`}
        spellCheck={false}
      />
      <P.ColorPicker type='color' value={currentColor} onChange={pickColor} />
    </P.Panel>
  );
};

export default UserPanel;
