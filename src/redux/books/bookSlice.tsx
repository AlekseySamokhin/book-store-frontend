import { createSlice } from '@reduxjs/toolkit';

import { bookThunks } from './bookThunks';

import type {
  ITypesDataBook,
  ITypesInfoPages,
} from '@/interfaces/bookInterfaces';

const getInitialState = () => ({
  books: [] as ITypesDataBook[],
  pagination: {} as ITypesInfoPages,
});

const booksSlice = createSlice({
  name: 'booksSlice',
  initialState: getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(bookThunks.getAllBooks.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.books = action.payload.books;
      state.pagination = action.payload.info;
    });

    builder.addCase(bookThunks.getOneBook.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.books = [action.payload];
    });
  },
});

export const { reducer: booksReducer } = booksSlice;
