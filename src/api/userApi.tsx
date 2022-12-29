import instanse from './api';

const getUser = () => {
  return instanse.get('/auth');
};

export default getUser;
