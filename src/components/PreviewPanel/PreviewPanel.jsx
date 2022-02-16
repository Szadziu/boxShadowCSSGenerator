import { useContext } from 'react';
import Panel from '../generics/Panel';
import TestBox from '../TestBox';
import boxShadowContext from '../../contexts/boxShadowContext';

const PreviewPanel = () => {
  const value = useContext(boxShadowContext);
  return (
    <Panel>
      <TestBox value={value} />
    </Panel>
  );
};

export default PreviewPanel;
