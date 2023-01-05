/* eslint-disable no-console */
import instanse from '../api';

import type { IUserType } from '../../redux/users/usersSlice';

interface ISignupRequest {
  email: string;
  password: string;
}

interface ISignupResponse {
  newUser: IUserType;
  accessToken: string;
}

interface ISigninResponse {
  existUser: IUserType;
  accessToken: string;
}

const API_URL = '/auth';

const getUser = async () => {
  const response = await instanse.get<IUserType>(`${API_URL}/me`);

  return response.data;
};

const signUp = async (params: ISignupRequest) => {
  const response = await instanse.post<ISignupResponse>(
    `${API_URL}/signup`,
    params,
  );

  return response.data;
};

const signIn = async (params: ISignupRequest) => {
  const response = await instanse.post<ISigninResponse>(
    `${API_URL}/login`,
    params,
  );
  console.log(response.data);
  return response.data;
};

export { getUser, signUp, signIn };
