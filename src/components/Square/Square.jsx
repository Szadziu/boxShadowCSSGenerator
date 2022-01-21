import * as P from './parts';
import { useContext } from 'react';
import { ValueContext } from '../PropertySlider/PropertySlider';
import boxShadowContext from '../../contexts/boxShadowContext';

const Square = () => {
  const value = useContext(boxShadowContext);

  return (
    <P.Square value={value}>
      <p>{value.offsetX}</p>
      <p>{value.offsetY}</p>
      <p>{value.spread}</p>
      <p>{value.blur}</p>
      <p>{value.opacity}</p>
    </P.Square>
  );
};

export default Square;
