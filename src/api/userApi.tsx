/* eslint-disable no-console */
import instanse from './api';

import type { IUserType } from '../redux/users/usersSlice';

interface ISignupRequest {
  email: string;
  password: string;
}

// interface ISignupResponse {
//  accessToken: string;
// }

const API_URL = '/auth';

const getUser = async () => {
  const response = await instanse.get<IUserType>(`${API_URL}/me`);

  return response.data;
};

const signUp = async (params: ISignupRequest) => {
  const response = await instanse.post<{
    newUser: IUserType;
    accessToken: string;
  }>(`${API_URL}/signup`, params);

  const { newUser, accessToken } = response.data;

  localStorage.setItem('token', accessToken);

  return newUser;
};

export { getUser, signUp };
