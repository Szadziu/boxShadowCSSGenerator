import PropertySlider from "../PropertySlider/PropertySlider";
import * as P from "./parts";

const UserPanel = () => {
  return (
    <P.Panel>
      <PropertySlider name="offset x" min="0" max="10" />
      <PropertySlider name="offset y" />
      <PropertySlider name="spread" />
      <PropertySlider name="blur" />
      <PropertySlider name="opacity" />
    </P.Panel>
  );
};

export default UserPanel;
