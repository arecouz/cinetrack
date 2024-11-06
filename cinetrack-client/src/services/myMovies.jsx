import axios from 'axios';
// const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const postToMyMovies = async (movieObject, token) => {
  try {
    const response = await axios.post(
      `/api/myMovies`,
      movieObject,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const putToMyMovies = async (movieObject, movieId, token) => {
  try {
    const response = await axios.put(
      `/api/myMovies/${movieId}`,
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
    const response = await axios.delete(`/api/myMovies/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
