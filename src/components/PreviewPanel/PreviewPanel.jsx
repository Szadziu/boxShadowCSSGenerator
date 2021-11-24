import React from "react";
import Square from "../Square";
import * as P from "./parts";

class PreviewPanel extends React.Component {
  render() {
    return (
      <P.Panel>
        <Square />
      </P.Panel>
    );
  }
}

export default PreviewPanel;
