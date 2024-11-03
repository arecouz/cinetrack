import axios from 'axios';
const baseUrl = import.meta.env.VITE_SERVER_URL;

const addUser = async (credentials) => {
  const response = await axios.post(`${baseUrl}/api/users`, credentials);
  return response.data;
};

const getUser = async (id) => {
  const response = await axios.get(`${baseUrl}/api/users/${id}`);
  return response.data;
};

const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/api/login`, credentials);
  return response.data;
};

export default { addUser, login, getUser };
