import PropertySlider from "../PropertySlider/PropertySlider";
import * as P from "./parts";

const UserPanel = () => {
  return (
    <P.Panel>
      <PropertySlider name="offset x" />
    </P.Panel>
  );
};

export default UserPanel;
