import { useContext } from "react";
import PropertySlider, { ValueContext } from "../PropertySlider/PropertySlider";
import * as P from "./parts";

const UserPanel = () => {
  const value = useContext(ValueContext);

  return (
    <P.Panel>
      <PropertySlider name="offset x" min={value.properties.offsetX} max="10" />
      <PropertySlider name="offset y" min={value.properties.offsetY} max="10" />
      <PropertySlider name="spread" min="0" max="5" />
      <PropertySlider name="blur" min="0" max="5" />
      <PropertySlider name="opacity" min="0" max="1" />
    </P.Panel>
  );
};

export default UserPanel;
