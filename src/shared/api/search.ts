import axios from 'axios';

export default function search(accessToken: string, query: string, limit = 20) {
  const response = axios('https://api.spotify.com/v1/search', {
    headers: {
      Accept: "application/json", 
      "Content-Type": "application/json",
      Authorization: `Bearer  ${accessToken}`,
    },
    params: {
      q: query,
      type: 'album,track',
      limit
    }
  })
    .then((response) => response)
    .catch((error) => {
      try {
        throw new Error(error);
      } finally {
        console.error(error); // eslint-disable-line
      }
    });

    return response
}
