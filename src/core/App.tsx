import React from 'react';
import { globalCss } from '@stitches/react';
import Routes from './Routes';

const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: '$dark3',
    color: '$light4',
    fontFamily: '$sans',
  },
});

export default React.memo(() => {
  globalStyles();

  return (
    <Routes />
  );
});
