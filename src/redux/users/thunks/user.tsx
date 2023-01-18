/* eslint-disable no-console */
import type { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { userService } from '../../../api/services';

import type {
  ITypesUpdatedInfoUser,
  ITypeUpdatedAvatarUser,
  ITypesUpdatedPasswordsUser,
} from '../../../interfaces/user';

const updateInfo = createAsyncThunk(
  'user/update-info',
  async (values: ITypesUpdatedInfoUser) => {
    try {
      const data = await userService.updateInfo(values);

      return data;
    } catch (_err) {
      const err = (_err as AxiosError);
      throw err.response?.data;
    }
  },
);

const updateAvatar = createAsyncThunk(
  'user/upload-avatar',
  async (values: ITypeUpdatedAvatarUser) => {
    try {
      const avatar = await userService.updateAvatar(values);

      return avatar;
    } catch (error) {
      console.log(error);
    }
  },
);

const updatePassword = createAsyncThunk(
  'user/update-password',
  async (values: ITypesUpdatedPasswordsUser) => {
    try {
      const data = await userService.updatePassword(values);
      console.log('DATA', data);

      return data;
    } catch (_err) {
      const err = (_err as AxiosError);
      throw err.response?.data;
    }
  },
);

const userThunks = {
  updateAvatar,
  updatePassword,
  updateInfo,
};

export { userThunks };
