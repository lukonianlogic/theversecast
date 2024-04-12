import { useEffect } from 'react';
import axios from 'axios';

const useSpotifyAuth = () => {
  useEffect(() => {
    async function authenticate() {
      try {
        const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
        const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

        const response = await axios.post(
          'https://accounts.spotify.com/api/token',
          `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        );

        const accessToken = response.data.access_token;
        localStorage.setItem('spotifyAccessToken', accessToken);
      } catch (error) {
        console.error('Error authenticating with Spotify:', error);
      }
    }

    authenticate();
  }, []);

  return null;  // This return is not necessary unless you want to render something
};

export default useSpotifyAuth;
