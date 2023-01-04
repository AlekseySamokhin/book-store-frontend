import axios from 'axios';

const instanse = axios.create({
  baseURL: 'http://localhost:4000/api',
});

instanse.interceptors.request.use((response) => {
  const token: string | null = localStorage.getItem('token');

  if (token) {
    // eslint-disable-next-line no-param-reassign
    response.headers = {
      ...response.headers,
      authorization: `Bearer ${token}`,
    };
  }

  return response;
});

export default instanse;
