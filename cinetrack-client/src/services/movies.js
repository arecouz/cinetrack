import axios from 'axios';

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export const searchMovies = async (
  query,
  { includeAdult = false, language = 'en-US', page = 1 } = {} // Default empty object for optional params
) => {
  try {
    const options = {
      params: {
        api_key: API_KEY,
        query,
        include_adult: includeAdult,
        language,
        page,
      },
    };

    const response = await axios.get(`${API_URL}/search/movie`, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
