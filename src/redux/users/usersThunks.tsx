/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUser, signUp, signIn } from '../../api/services/authApi';

import type { IAuthRequestType } from '../../interfaces/userInterfaces';

const getCurrentUserThunk = createAsyncThunk('user/token', async () => {
  try {
    const data = await getUser();

    return data;
  } catch (error) {
    console.log(error);
  }
});

const signUpUserThunk = createAsyncThunk(
  'user/signup',
  async (values: IAuthRequestType) => {
    try {
      const data = await signUp(values);

      const { newUser, accessToken } = data;

      localStorage.setItem('token', accessToken);

      return newUser;
    } catch (error) {
      console.log(error);
    }
  },
);

const signInUserThunk = createAsyncThunk(
  'user/signin',
  async (values: IAuthRequestType) => {
    try {
      const data = await signIn(values);
      console.log(data);
      const { existUser, accessToken } = data;

      localStorage.setItem('token', accessToken);

      return existUser;
    } catch (error) {
      console.log(error);
    }
  },
);

export { getCurrentUserThunk, signUpUserThunk, signInUserThunk };
