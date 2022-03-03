import React, { useEffect } from 'react';
import { globalCss } from '@stitches/react';
import { getAuthCode, getToken } from 'src/shared/api';
import { useAppContext } from 'src/shared/store/context';
import { SET_CODE, SET_TOKEN } from '$constants/actions';
import Dashboard from '../pages/Dashboard';

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
  const code = new URLSearchParams(window.location.search).get('code');
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    if (!code) {
      getAuthCode();
    } else {
      dispatch({ type: SET_CODE, code });
      getToken().then((res) => dispatch({ type: SET_TOKEN, token: res?.data }));
    }
  }, [code]);

  if (!state.token?.access_token) return <>Loading..</>; // TODO: proper loader

  return (
    <Dashboard />
  );
});
