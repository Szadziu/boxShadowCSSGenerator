import React from 'react';
import TestBox from '../TestBox';
import { Panel } from '../UserPanel/parts';

class PreviewPanel extends React.Component {
  render() {
    return (
      <Panel>
        <TestBox />
      </Panel>
    );
  }
}

export default PreviewPanel;
