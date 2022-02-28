import React from 'react';
import { globalCss } from '@stitches/react';
import Dashboard from '../pages/Dashboard';

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
  body: {
    backgroundColor: '#333',
    color: 'white',
    fontFamily: 'Montserrat, sans-serif',
  },
});

export default React.memo(() => {
  globalStyles();

  return (
    <Dashboard />
  );
});
