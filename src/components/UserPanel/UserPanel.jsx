import PropertySlider from "../PropertySlider/PropertySlider";
import * as P from "./parts";

const UserPanel = () => {
  return (
    <P.Panel>
      <PropertySlider name="offset x" min="0" max="10" />
      <PropertySlider name="offset y" min="0" max="10" />
      <PropertySlider name="spread" min="0" max="5" />
      <PropertySlider name="blur" min="0" max="5" />
      <PropertySlider name="opacity" min="0" max="1" />
    </P.Panel>
  );
};

export default UserPanel;
