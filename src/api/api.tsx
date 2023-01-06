/* eslint-disable no-param-reassign */
import axios from 'axios';

const instanse = axios.create({
  baseURL: 'http://localhost:4000/api',
});

instanse.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers = {
      ...config.headers,
      authorization: `Bearer ${token}`,
    };
  }

  return config;
});

export default instanse;
