import { createSlice } from '@reduxjs/toolkit';

import { bookThunks } from './bookThunks';

import type { ITypesDataBook, ITypesInfoBooks } from '@/interfaces/bookInterfaces';

const getInitialState = () => ({
  books: [] as ITypesDataBook[],
  pages: {} as ITypesInfoBooks,
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
      state.pages = action.payload.info;
    });
  },
});

export const { reducer: booksReducer } = booksSlice;
