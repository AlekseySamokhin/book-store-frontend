import { createSlice } from '@reduxjs/toolkit';

import { authThunks, userThunks } from './thunks';
import { bookThunks } from '../books/bookThunks';

import type {
  ITypeCartUser,
  ITypeDataUser,
  ITypeStateUser,
} from '@/interfaces/userInterfaces';
import type { ITypeDataBook } from '@/interfaces/bookInterfaces';
import { initialBook } from '../books/bookSlice';

const initialUser: ITypeDataUser = {
  id: 0,
  fullName: '',
  email: '',
  password: '',
  avatar: '',
};

const initialFavorites: ITypeDataBook = {
  bookId: '',
  title: '',
  author: '',
  price: 0,
  description: '',
  poster: '',
  isNew: false,
  isBestseller: false,
  averageRating: 0,
};

const initialCart: ITypeCartUser = {
  id: 0,
  count: '',
  book: initialBook,
};

const getInitialState = (): ITypeStateUser => ({
  user: initialUser,
  favorites: [initialFavorites],
  cart: [initialCart],
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
    builder.addCase(userThunks.getCart.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.cart = action.payload;
    });

    builder.addCase(bookThunks.addFavoriteBook.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.favorites = action.payload;
    });

    builder.addCase(
      bookThunks.deleteFavoriteBook.fulfilled,
      (state, action) => {
        if (!action.payload) {
          return;
        }

        state.favorites = action.payload;
      },
    );

    builder.addCase(authThunks.getCurrentUser.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.user = action.payload.currentUser;
      state.favorites = action.payload.favoritesBooksArray;
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

      state.user = action.payload.user;
      state.cart = action.payload.cart;
      state.favorites = action.payload.favorites;
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
