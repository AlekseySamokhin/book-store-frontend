/* eslint-disable no-console */
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
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

const updateAvatar = createAsyncThunk(
  'user/re',
  async (values: ITypeUpdatedAvatarUser) => {
    console.log(values);
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
      console.log('values', values);
      const data = await userService.updatePassword(values);

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

const userThunks = {
  updateAvatar,
  updatePassword,
  updateInfo,
};

export { userThunks };
