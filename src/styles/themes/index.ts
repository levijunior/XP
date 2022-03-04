import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: '#FBC105',
      light1: '#f0f0f0',
      light2: '#cccccc',
      light3: '#b8b8b8',
      light4: '#FFFFFF',
      dark1: '#666666',
      dark2: '#3D3D3D',
      dark3: '#1F1F1F',
      dark4: '#121212',
      error: '#CC3333',
      info: '#505AFF',
      success: '#0A9E5A',
      warning: '#D77B0A',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '25px',
      5: '40px',
      6: '50px',
      7: '100px',
    },
    fontSizes: {
      1: '10px',
      2: '12px',
      3: '14px',
      4: '15px',
      5: '16px',
      6: '18px',
      7: '21px',
      8: '24px',
      9: '30px',
    },
    fonts: {
      sans: 'Montserrat, sans-serif',
    },
    fontWeights: {
      light: 300,
      medium: 500,
      bold: 700,
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
  utils: {
    marginX: (value: number | string) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: number | string) => ({ marginTop: value, marginBottom: value }),
  },
});
