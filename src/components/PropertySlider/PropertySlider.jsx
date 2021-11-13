import DraggableItem from "../DraggableItem/DraggableItem";

import * as P from "./parts";

const PropertySlider = ({ name }) => {
  return (
    <P.Wrapper>
      <P.PropertyName>{name}</P.PropertyName>
      <P.Slider>
        <DraggableItem />
      </P.Slider>
    </P.Wrapper>
  );
};

export default PropertySlider;
