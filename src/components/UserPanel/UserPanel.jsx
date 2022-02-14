import { useContext, useRef, useState } from 'react';
import PropertySlider from '../PropertySlider/PropertySlider';
import BoxShadowContext from '../../contexts/boxShadowContext';
import * as P from './parts';

const UserPanel = () => {
  const textInputRef = useRef(null);
  const [isTextCopied, setIsTextCopied] = useState(false);

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

  const copyBoxShadowProperty = () => {
    const inputElement = textInputRef.current;
    const clipboard = textInputRef.current.value;

    inputElement.select();
    inputElement.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(clipboard);

    setIsTextCopied(true);
    setTimeout(() => setIsTextCopied(false), 2000);
  };

  return (
    <P.Panel>
      <PropertySlider
        value={offsetX}
        setValue={setOffsetX}
        name='offset x'
        min={-100}
        max={100}
      />
      <PropertySlider
        value={offsetY}
        setValue={setOffsetY}
        name='offset y'
        min={-100}
        max={100}
      />
      <PropertySlider
        value={spread}
        setValue={setSpread}
        name='spread'
        min={0}
        max={50}
      />
      <PropertySlider
        value={blur}
        setValue={setBlur}
        name='blur'
        min={0}
        max={50}
      />
      <P.TextPicker
        ref={textInputRef}
        type='text'
        value={`box-shadow: ${offsetX}px ${offsetY}px ${spread}px ${blur}px ${currentColor}`}
        spellCheck={false}
      />
      <P.CopyButton onClick={copyBoxShadowProperty}>
        copy
        {isTextCopied && <P.CopyInfo>copied!</P.CopyInfo>}
      </P.CopyButton>
      <P.ColorPicker type='color' value={currentColor} onChange={pickColor} />
    </P.Panel>
  );
};

export default UserPanel;
