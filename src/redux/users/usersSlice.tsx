/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

import {
  getCurrentUserThunk,
  signUpUserThunk,
  signInUserThunk,
} from './usersThunks';

import type { IUserType, IUserStateType } from '../../types/user';

const initialUser: IUserType = {
  id: 0,
  fullName: '',
  email: '',
  password: '',
};

const initialState: IUserStateType = {
  user: initialUser,
};

const usersSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = initialUser;
      console.log(state.user);
    },
  },
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
      console.log(state.user);
    });

    builder.addCase(signInUserThunk.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.user = action.payload;
    });
  },
});

export const { logout } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
