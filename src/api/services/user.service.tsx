import { api } from '../axios-instance';

import type {
  ITypesDataUser,
  ITypesUpdatedInfoUser,
  ITypesUpdatedPasswordsUser,
  ITypeUpdatedAvatarUser,
} from '../../interfaces/user';

const API_USER_URL = '/user';

const updateInfo = async (params: ITypesUpdatedInfoUser) => {
  const response = await api.patch<ITypesDataUser>(
    `${API_USER_URL}/info`,
    params,
  );

  return response.data;
};

const updatePassword = async (params: ITypesUpdatedPasswordsUser) => {
  const response = await api.patch<ITypesDataUser>(
    `${API_USER_URL}/password`,
    params,
  );

  return response.data;
};

const updateAvatar = async (params: ITypeUpdatedAvatarUser) => {
  const response = await api.patch<ITypesDataUser>(
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
