/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../../api/services/auth.service';

import { storage } from '../../utils/storage';

import type { IAuthRequestType } from '../../types/user';

const signUpUserThunk = createAsyncThunk(
  'user/register',
  async (values: IAuthRequestType) => {
    try {
      const data = await authService.signUp(values);

      const { user, accessToken } = data;

      storage.set('token', accessToken);

      return user;
    } catch (error) {
      console.log(error);
    }
  },
);

const signInUserThunk = createAsyncThunk(
  'user/login',
  async (values: IAuthRequestType) => {
    try {
      const data = await authService.signIn(values);
      console.log(data);
      const { user, accessToken } = data;

      storage.set('token', accessToken);

      return user;
    } catch (error) {
      console.log(error);
    }
  },
);

const getCurrentUserThunk = createAsyncThunk('user/token', async () => {
  try {
    const data = await authService.getCurrentUser();

    return data;
  } catch (error) {
    console.log(error);
  }
});

export {
  getCurrentUserThunk,
  signUpUserThunk,
  signInUserThunk,
};
