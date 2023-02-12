/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

import { authThunks, userThunks } from './thunks';
import { bookThunks } from '../books/bookThunks';

import type { ITypeCartUser, ITypeDataUser, ITypeStateUser } from '@/interfaces/userInterfaces';
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
  cart: [] as ITypeCartUser[],
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

      console.log(action.payload);

      state.user = action.payload.currentUser;
      state.favoritesBooks = action.payload.favoritesBooksArray;
      state.cart = action.payload.cartUser;
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
