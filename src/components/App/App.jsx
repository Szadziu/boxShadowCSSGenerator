import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import PreviewPanel from '../PreviewPanel';
import Title from '../Title';
import UserPanel from '../UserPanel';
import Wrapper from '../Wrapper';

import { BoxShadowContextProvider } from '../../contexts/boxShadowContext';
import { title } from '../../constants/constants';
import { theme } from '../../theme/theme';

const App = () => {
  return (
    <>
      <BoxShadowContextProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Title text={title} />
            <UserPanel />
            <PreviewPanel />
          </Wrapper>
        </ThemeProvider>
      </BoxShadowContextProvider>
    </>
  );
};

export default App;
