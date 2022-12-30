import axios from 'axios';

const instanse = axios.create({
  baseURL: 'http://localhost:4005/api',
});

instanse.interceptors.request.use((config) => {
  const token: string | null = localStorage.getItem('token');

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
