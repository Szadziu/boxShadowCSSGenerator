import Title from "../Title";

import UserPanel from "../UserPanel/UserPanel";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { title } from "../../constants/constants";
import { theme } from "../../theme/theme";
import PreviewPanel from "../PreviewPanel/PreviewPanel";
import { ValueContext } from "../PropertySlider/PropertySlider";

const App = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [spread, setSpread] = useState(0);
  const [blur, setBlur] = useState(0);
  const [opacity, setOpacity] = useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ValueContext.Provider
          value={{
            properties: {
              offsetX,
              offsetY,
              spread,
              blur,
              opacity,
            },
            actions: {
              setOffsetX,
              setOffsetY,
              setSpread,
              setBlur,
              setOpacity,
            },
          }}
        >
          <Title text={title} />
          <UserPanel />
          <PreviewPanel />
        </ValueContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
