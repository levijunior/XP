import axios from 'axios';

export default async function getToken() {
  try {
    const response = await axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${import.meta.env.VITE_CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`)}`,
      },
      data: 'grant_type=client_credentials',
      method: 'POST',
    });
    return response;
  } catch (error) {
    try {
      throw new Error(error);
    } finally {
      console.error(error); // eslint-disable-line
    }
  }
}
