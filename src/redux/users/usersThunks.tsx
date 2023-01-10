/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';

// import request from 'axios';
import axios from 'axios';

import { authService } from '../../api/services/auth.service';

import { storage } from '../../utils/storage';

import type { IAuthRequestType } from '../../types/user';

// interface ICustomErrorType {}

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
      if (error instanceof axios.AxiosError) {
        throw error;
      }
    }
  },
);

const getCurrentUserThunk = createAsyncThunk('user/token', async () => {
  try {
    const data = await authService.getCurrentUser();

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const { code, message } = error.response.data;

      console.log(code, message);

      throw Object.assign(new Error(), { message, code });
    }
  }
});

export { getCurrentUserThunk, signUpUserThunk, signInUserThunk };
