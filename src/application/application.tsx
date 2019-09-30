import React from 'react';
import { hot } from 'react-hot-loader';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Weather from './weather/weather';
import theme from './theme';

const ApplicationStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Saira+Semi+Condensed");
 
  body {
    margin: 0;
    padding: 0;
    font-family: 'Saira Semi Condensed', sans-serif;
  }
`;

const Application: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <ApplicationStyles />
        <Weather />
      </>
    </ThemeProvider>
  );
};

export default hot(module)(Application);
