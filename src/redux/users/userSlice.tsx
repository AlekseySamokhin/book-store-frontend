import { createSlice } from '@reduxjs/toolkit';

import { userThunks } from './userThunks';
import type { IUserType, IUserStateType } from '../../interfaces/user';
import { useLocalStorage } from '../../utils/storage';

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
    signOut: () => {
      useLocalStorage.remove('token');

      return getInitialState();
    },
  },

  extraReducers: (builder) => {
    builder.addCase(userThunks.getCurrentUser.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.user = action.payload;
    });

    builder.addCase(userThunks.signUp.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.user = action.payload;
    });

    builder.addCase(userThunks.signIn.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.user = action.payload;
    });
  },
});

export const { reducer: userReducer, actions: userActions } = usersSlice;
