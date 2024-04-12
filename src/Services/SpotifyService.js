import axios from 'axios';

const SpotifyService = {
  fetchData: async (accessToken) => {
    try {
      const url = `https://api.spotify.com/v1/shows/6BZ7BmCQxqlxoJ9fZBzATR`;

      // Make a GET request to Spotify API using the access token
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      // Process the response
      return response.data; // Directly return data, no need to store in localStorage
    } catch (error) {
      console.error('Error fetching data from Spotify:', error);
      return null;
    }
  }
};

export default SpotifyService;
