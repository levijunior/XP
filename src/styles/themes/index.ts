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
      gray400: 'gainsboro',
      gray500: 'lightgray',
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
