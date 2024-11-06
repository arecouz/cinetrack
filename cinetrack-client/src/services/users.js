import axios from 'axios';
const baseUrl = '/api';

const addUser = async (credentials) => {
  const response = await axios.post(`${baseUrl}/users`, credentials);
  return response.data;
};

const getUser = async (id) => {
  const response = await axios.get(`${baseUrl}/users/${id}`);
  return response.data;
};

const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
};

export default { addUser, login, getUser };
