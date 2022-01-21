import Title from '../Title';

import UserPanel from '../UserPanel';
import Wrapper from '../Wrapper';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { title } from '../../constants/constants';
import { theme } from '../../theme/theme';
import PreviewPanel from '../PreviewPanel/PreviewPanel';
import { ValueContext } from '../PropertySlider/PropertySlider';
import { BoxShadowContextProvider } from '../../contexts/boxShadowContext';
import GlobalStyle from '../styles/GlobalStyle';

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
