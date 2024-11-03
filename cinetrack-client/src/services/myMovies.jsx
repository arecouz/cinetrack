import axios from 'axios';
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const postToMyMovies = async (movieObject, token) => {
  console.log('postToMyMovies movie object', movieObject);
  try {
    const response = await axios.post(
      `${SERVER_URL}/api/myMovies`,
      movieObject,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteAMyMovies = async (id, token) => {
  try {
    const response = await axios.delete(`${SERVER_URL}/api/myMovies/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
