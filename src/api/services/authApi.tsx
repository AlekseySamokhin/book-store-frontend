/* eslint-disable no-console */
import instanse from '../api';

import type {
  IUserType,
  IAuthRequestType,
  IAuthSigninResponse,
  IAuthSignupResponse,
} from '../../interfaces/userInterfaces';

const API_URL = '/auth';

const getUser = async () => {
  const response = await instanse.get<IUserType>(`${API_URL}/me`);

  return response.data;
};

const signUp = async (params: IAuthRequestType) => {
  const response = await instanse.post<IAuthSignupResponse>(
    `${API_URL}/signup`,
    params,
  );

  return response.data;
};

const signIn = async (params: IAuthRequestType) => {
  const response = await instanse.post<IAuthSigninResponse>(
    `${API_URL}/signin`,
    params,
  );

  return response.data;
};

export { getUser, signUp, signIn };
