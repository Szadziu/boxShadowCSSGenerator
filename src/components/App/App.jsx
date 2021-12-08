import Title from "../Title";

import UserPanel from "../UserPanel/UserPanel";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { title } from "../../constants/constants";
import { theme } from "../../theme/theme";
import PreviewPanel from "../PreviewPanel/PreviewPanel";
import { ValueContext } from "../PropertySlider/PropertySlider";
import { BoxShadowContextProvider } from "../../contexts/boxShadowContext";

const App = () => {
  return (
    <>
      <BoxShadowContextProvider>
        <ThemeProvider theme={theme}>
          <Title text={title} />
          <UserPanel />
          <PreviewPanel />
        </ThemeProvider>
      </BoxShadowContextProvider>
    </>
  );
};

export default App;
