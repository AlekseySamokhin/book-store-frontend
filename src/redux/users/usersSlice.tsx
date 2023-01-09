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

const getInitialState = (): IUserStateType => ({
  user: initialUser,
});

const usersSlice = createSlice({
  name: 'userSlice',
  initialState: getInitialState(),
  reducers: {
    logout: () => {
      return getInitialState();
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
