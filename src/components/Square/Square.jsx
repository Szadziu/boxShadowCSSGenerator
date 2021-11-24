import * as P from "./parts";
import { useContext } from "react";
import { ValueContext } from "../PropertySlider/PropertySlider";

const Square = () => {
  const value = useContext(ValueContext);

  return <P.Square>TEST {value.test}</P.Square>;
};

export default Square;
