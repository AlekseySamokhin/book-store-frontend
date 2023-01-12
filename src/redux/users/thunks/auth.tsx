/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { authService } from '../../../api/services';
import { useLocalStorage } from '../../../utils/storage';
import type { IAuthRequestType } from '../../../interfaces/user';

const signUp = createAsyncThunk(
  'user/register',
  async (values: IAuthRequestType) => {
    try {
      const data = await authService.signUp(values);

      const { user, accessToken } = data;

      useLocalStorage.set('token', accessToken);

      return user;
    } catch (error) {
      console.log(error);
    }
  },
);

const signIn = createAsyncThunk(
  'user/login',
  async (values: IAuthRequestType) => {
    try {
      const data = await authService.signIn(values);
      console.log(data);
      const { user, accessToken } = data;

      useLocalStorage.set('token', accessToken);

      return user;
    } catch (error) {
      if (error instanceof axios.AxiosError) {
        throw error;
      }
    }
  },
);

const getCurrentUser = createAsyncThunk('user/token', async () => {
  try {
    const data = await authService.getCurrentUser();

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error.response);
      const { code, message } = error.response.data;

      console.log(code, message);

      throw Object.assign(new Error(), { message, code });
    }
  }
});

const authThunks = {
  signUp,
  signIn,
  getCurrentUser,
};

export { authThunks };
