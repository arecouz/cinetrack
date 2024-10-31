import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

if (!API_KEY || !API_URL) {
  throw new Error('Missing API_URL or API_KEY in environment variables');
}

export const searchMovies = async (
  query,
  { includeAdult = false, language = 'en-US', page = 1 } = {} // Default empty object for optional params
) => {
  try {
    const options = {
      headers: {
        Authorization: API_KEY,
      },
      params: {
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

export const getCredits = async (id, { language = 'en-US' } = {}) => {
  try {
    const options = {
      headers: {
        Authorization: API_KEY,
      },
      params: {
        language,
      },
    };

    const response = await axios.get(`${API_URL}/movie/${id}/credits`, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    throw error;
  }
};