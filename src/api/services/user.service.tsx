import { api } from '../axios-instance';

import type {
  ITypeDataUser,
  ITypesUpdatedInfoUser,
  ITypesUpdatedPasswordsUser,
  ITypeUpdatedAvatarUser,
} from '../../interfaces/userInterfaces';

const API_USER_URL = '/user';

const updateInfo = async (params: ITypesUpdatedInfoUser) => {
  const response = await api.patch<ITypeDataUser>(
    `${API_USER_URL}/info`,
    params,
  );

  return response.data;
};

const updatePassword = async (params: ITypesUpdatedPasswordsUser) => {
  const response = await api.patch<ITypeDataUser>(
    `${API_USER_URL}/password`,
    params,
  );

  return response.data;
};

const updateAvatar = async (params: ITypeUpdatedAvatarUser) => {
  const response = await api.patch<ITypeDataUser>(
    `${API_USER_URL}/avatar`,
    params,
  );

  return response.data;
};

const userService = {
  updateInfo,
  updatePassword,
  updateAvatar,
};

export { userService };
