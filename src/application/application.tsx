import React from 'react';
import { hot, setConfig } from 'react-hot-loader';
import { createGlobalStyle } from 'styled-components';

import Weather from './weather/weather';

setConfig({ reloadHooks: false });

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
    <>
      <ApplicationStyles />
      <Weather />
    </>
  );
};

export default hot(module)(Application);
