import * as P from './parts';
import { useContext } from 'react';
import { ValueContext } from '../PropertySlider/PropertySlider';
import boxShadowContext from '../../contexts/boxShadowContext';

const TestBox = () => {
  const value = useContext(boxShadowContext);

  return <P.Box value={value} />;
};

export default TestBox;
