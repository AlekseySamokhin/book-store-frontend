import instanse from './api';

const getUser = () => {
  return instanse.get('/auth/me');
};

export default getUser;
