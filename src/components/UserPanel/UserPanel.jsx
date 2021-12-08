import { useContext } from "react";
import PropertySlider from "../PropertySlider/PropertySlider";
import BoxShadowContext from "../../contexts/boxShadowContext";
import * as P from "./parts";

const UserPanel = () => {
  const {
    offsetX,
    setOffsetX,
    offsetY,
    setOffsetY,
    blur,
    setBlur,
    opacity,
    setOpacity,
    spread,
    setSpread,
  } = useContext(BoxShadowContext);

  return (
    <P.Panel>
      <PropertySlider
        value={offsetX}
        setValue={setOffsetX}
        name="offset x"
        min="0"
        max="10"
      />
      <PropertySlider
        value={offsetY}
        setValue={setOffsetY}
        name="offset y"
        min="0"
        max="10"
      />
      <PropertySlider
        value={spread}
        setValue={setSpread}
        name="spread"
        min="0"
        max="5"
      />
      <PropertySlider
        value={blur}
        setValue={setBlur}
        name="blur"
        min="0"
        max="5"
      />
      <PropertySlider
        value={opacity}
        setValue={setOpacity}
        name="opacity"
        min="0"
        max="1"
      />
    </P.Panel>
  );
};

export default UserPanel;
