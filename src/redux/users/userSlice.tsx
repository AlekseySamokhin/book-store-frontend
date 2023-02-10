import { createSlice } from '@reduxjs/toolkit';

import { authThunks, userThunks } from './thunks';
import { bookThunks } from '../books/bookThunks';

import type { ITypeDataUser, ITypeStateUser } from '@/interfaces/userInterfaces';
import type { ITypeDataBook } from '@/interfaces/bookInterfaces';

const initialUser: ITypeDataUser = {
  id: 0,
  fullName: '',
  email: '',
  password: '',
  avatar: '',
};

const getInitialState = (): ITypeStateUser => ({
  user: initialUser,
  favoritesBooks: [] as ITypeDataBook[],
});

const userSlice = createSlice({
  name: 'authSlice',
  initialState: getInitialState(),
  reducers: {
    signOut: () => {
      return getInitialState();
    },
  },

  extraReducers: (builder) => {
    builder.addCase(bookThunks.addFavoriteBook.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.favoritesBooks = action.payload;
    });

    builder.addCase(bookThunks.deleteFavoriteBook.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.favoritesBooks = action.payload;
    });

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

export const { reducer: userReducer, actions: userActions } = userSlice;
