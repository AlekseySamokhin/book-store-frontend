import instanse from './api';

import type { IUserType } from '../redux/users/usersSlice';

export const getCurrentUser = async () => {
  const response = await instanse.get<IUserType>('/auth/me');

  return response.data;
};
