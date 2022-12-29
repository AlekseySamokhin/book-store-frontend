import axios from 'axios';

const instanse = axios.create({
  baseURL: 'http://localhost:4001/api',
});

instanse.interceptors.request.use((config) => {
  const token: string | null = JSON.parse(localStorage.getItem('token') || '{}');

  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers = {
      ...config.headers,
      authorization: `Bearer ${token}`,
    };
  }
  return config;
});

export default instanse;
