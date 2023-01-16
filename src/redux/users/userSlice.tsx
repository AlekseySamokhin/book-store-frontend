/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

import { authThunks, userThunks } from './thunks';
import type { ITypesDataUser, IUserStateType } from '../../interfaces/user';
import { useLocalStorage } from '../../utils/storage';

const initialUser: ITypesDataUser = {
  id: 0,
  fullName: '',
  email: '',
  password: '',
  avatar: '',
};

const getInitialState = (): IUserStateType => ({
  user: initialUser,
});

const usersSlice = createSlice({
  name: 'userSlice',
  initialState: getInitialState(),
  reducers: {
    signOut: () => {
      useLocalStorage.remove('token');

      return getInitialState();
    },
  },

  extraReducers: (builder) => {
    builder.addCase(authThunks.getCurrentUser.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.user = action.payload;
    });

    builder.addCase(authThunks.signUp.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.user = action.payload;
    });

    builder.addCase(authThunks.signIn.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.user = action.payload;
    });

    builder.addCase(userThunks.updateInfo.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.user = action.payload;
    });

    builder.addCase(userThunks.updateAvatar.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.user = action.payload;
    });
  },
});

export const { reducer: userReducer, actions: userActions } = usersSlice;
