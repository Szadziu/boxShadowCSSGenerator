import Title from "../Title";

import UserPanel from "../UserPanel/UserPanel";

import { ThemeProvider } from "styled-components";
import { title } from "../../constants/constants";
import { theme } from "../../theme/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Title text={title} />
        <UserPanel />
      </ThemeProvider>
    </>
  );
};

export default App;
