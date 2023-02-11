import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import { authService } from '@/api/services';
import { useLocalStorage } from '@/utils/storage';
import type { ITypesAuthRequest } from '@/interfaces/userInterfaces';

const signUp = createAsyncThunk(
  'user/register',
  async (values: ITypesAuthRequest) => {
    try {
      const data = await authService.signUp(values);

      const { user, accessToken } = data;

      useLocalStorage.set('token', accessToken);

      return user;
    } catch (_err) {
      const err = _err as AxiosError;
      throw err.response?.data;
    }
  },
);

const signIn = createAsyncThunk(
  'user/login',
  async (values: ITypesAuthRequest) => {
    try {
      const data = await authService.signIn(values);

      const { user, accessToken } = data;

      useLocalStorage.set('token', accessToken);

      return user;
    } catch (_err) {
      const err = _err as AxiosError;
      throw err.response?.data;
    }
  },
);

const getCurrentUser = createAsyncThunk('user/token', async () => {
  const data = await authService.getCurrentUser();

  return data;
});

const authThunks = {
  signUp,
  signIn,
  getCurrentUser,
};

export { authThunks };
