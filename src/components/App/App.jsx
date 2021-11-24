import Title from "../Title";

import UserPanel from "../UserPanel/UserPanel";

import { ThemeProvider } from "styled-components";
import { title } from "../../constants/constants";
import { theme } from "../../theme/theme";
import PreviewPanel from "../PreviewPanel/PreviewPanel";
import { ValueContext } from "../PropertySlider/PropertySlider";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ValueContext.Provider value={{ test: 1 }}>
          <Title text={title} />
          <UserPanel />
          <PreviewPanel />
        </ValueContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
