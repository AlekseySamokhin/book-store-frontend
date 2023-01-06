/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

import {
  getCurrentUserThunk,
  signUpUserThunk,
  signInUserThunk,
} from './usersThunks';

import type {
  IUserType,
  IUserStateType,
} from '../../interfaces/userInterfaces';

const initialUser: IUserType = {
  id: 0,
  fullName: '',
  email: '',
  password: '',
};

const initialState: IUserStateType = {
  user: initialUser,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentUserThunk.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.user = action.payload;
    });

    builder.addCase(signUpUserThunk.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.user = action.payload;
    });

    builder.addCase(signInUserThunk.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.user = action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;
