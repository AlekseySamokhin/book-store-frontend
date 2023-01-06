/* eslint-disable no-param-reassign */
import axios from 'axios';

import { storage } from '../utils/storage';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api',
});

instance.interceptors.request.use((config) => {
  const token = storage.get('token');

  if (token) {
    config.headers = {
      ...config.headers,
      authorization: `Bearer ${token}`,
    };
  }

  return config;
});

export { instance };
