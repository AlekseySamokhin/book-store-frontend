import { api } from '../axios-instance';

import type { ITypesAuthRequest, IAuthResponseType, ITypeResponseCurUser } from '@/interfaces/userInterfaces';

const AUTH_URL = '/auth';

const getCurrentUser = async () => {
  const response = await api.get<ITypeResponseCurUser>(`${AUTH_URL}/me`);

  return response.data;
};

const signUp = async (params: ITypesAuthRequest) => {
  const response = await api.post<IAuthResponseType>(
    `${AUTH_URL}/signup`,
    params,
  );

  return response.data;
};

const signIn = async (params: ITypesAuthRequest) => {
  const response = await api.post<IAuthResponseType>(
    `${AUTH_URL}/signin`,
    params,
  );

  return response.data;
};

const authService = {
  getCurrentUser,
  signUp,
  signIn,
};

export { authService };
