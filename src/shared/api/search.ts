import axios, { AxiosRequestConfig, CancelTokenSource } from 'axios';

let call: CancelTokenSource;
function makeRequestCreator(options: AxiosRequestConfig<any>) {
  return async function makeRequest(url: string) {
    if (call) {
      call.cancel();
    }
    call = axios.CancelToken.source();

    try {
      return await axios.get(url, { ...options, cancelToken: call.token });
    } catch (error) {
      if (!axios.isCancel(error)) {
        throw new Error(error);
      }
    }
    return null;
  };
}

export default function search(accessToken: string, query: string, limit = 20) {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer  ${accessToken}`,
    },
    params: {
      q: query,
      type: 'album',
      limit,
    },
  };
  const get = makeRequestCreator(options);
  return get('https://api.spotify.com/v1/search');
}
