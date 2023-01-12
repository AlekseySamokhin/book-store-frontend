/* eslint-disable no-console */
import { instance } from '../instance';

import type { IAuthRequestType, IAuthResponseType, ITypesDataUser } from '../../interfaces/user';

const API_AUTH_URL = '/auth';

const signUp = async (params: IAuthRequestType) => {
  const response = await instance.post<IAuthResponseType>(
    `${API_AUTH_URL}/signup`,
    params,
  );

  return response.data;
};

const signIn = async (params: IAuthRequestType) => {
  const response = await instance.post<IAuthResponseType>(
    `${API_AUTH_URL}/signin`,
    params,
  );

  return response.data;
};

const getCurrentUser = async () => {
  const response = await instance.get<ITypesDataUser>(`${API_AUTH_URL}/me`);

  return response.data;
};

const authService = {
  signUp,
  signIn,
  getCurrentUser,
};

export { authService };
