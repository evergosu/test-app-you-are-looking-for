import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    media: {
      phone: string;
    };
    colors: {
      lightGrey: string;
      darkGrey: string;
      blackIsh: string;
    };
    weatherColors: {
      c: string;
      hr: string;
      sn: string;
      lc: string;
    };
  }
}

const theme: DefaultTheme = {
  media: {
    phone: '400px',
  },
  colors: {
    lightGrey: '#f6fbfe',
    darkGrey: '#949ea0',
    blackIsh: '#232323',
  },
  weatherColors: {
    c: '#fff8de',
    hr: '#eaeaea',
    sn: '#eef6f9',
    lc: '#f9f9f9',
  },
};

export default theme;
