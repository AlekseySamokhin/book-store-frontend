/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { getCurrentUserThunk, signUpUserThunk, signInUserThunk } from './usersThunks';

export interface IUserType {
  id: number;
  fullName: string;
  email: string;
  password: string;
  //  dob: string;
}

interface IUserState {
  user: IUserType;
}

const initialUser: IUserType = {
  id: 0,
  fullName: '',
  email: '',
  password: '',
  //  dob: '',
};

const initialState: IUserState = {
  user: initialUser,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUserType>) => {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentUserThunk.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.user = action.payload;
      console.log(state.user);
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

export const { login } = userSlice.actions;

export const userReducer = userSlice.reducer;
