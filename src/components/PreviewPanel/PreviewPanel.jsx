import { useContext } from 'react';
import TestBox from '../TestBox';

import boxShadowContext from '../../contexts/boxShadowContext';
import * as P from './parts';

const PreviewPanel = () => {
  const value = useContext(boxShadowContext);
  return (
    <P.Panel>
      <TestBox value={value} />
    </P.Panel>
  );
};

export default PreviewPanel;
