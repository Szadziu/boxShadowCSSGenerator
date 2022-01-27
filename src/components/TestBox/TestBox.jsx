import { useContext } from 'react';
import boxShadowContext from '../../contexts/boxShadowContext';
import * as P from './parts';

const TestBox = () => {
  const value = useContext(boxShadowContext);

  return <P.Box value={value} />;
};

export default TestBox;
