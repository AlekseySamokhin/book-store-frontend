import axios from 'axios';

import { useLocalStorage } from '../utils/storage';

const BASE_URL = 'http://localhost:4000/api';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = useLocalStorage.get('token');

  if (token) {
    config.headers = {
      ...config.headers,
      authorization: `Bearer ${token}`,
    };
  }

  return config;
});

export { api };
