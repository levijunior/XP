import { useEffect } from 'react';
import { SET_CODE, SET_TOKEN } from '$constants/actions';
import { getAuthCode, getToken } from '$api';
import { useAppContext } from '$context';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const code = new URLSearchParams(window.location.search).get('code');
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!code && !state.code) {
      getAuthCode();
    } else {
      dispatch({ type: SET_CODE, code });
      getToken()
        .then((res) => {
          dispatch({ type: SET_TOKEN, token: res?.data });
          navigate('/dashboard');
        });
    }
  }, [code]);

  if (!state.token?.access_token) return <>Loading..</>; // TODO: proper loader

  return null;
}
