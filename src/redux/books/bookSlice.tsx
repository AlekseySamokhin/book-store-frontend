import { createSlice } from '@reduxjs/toolkit';

import { bookThunks } from './bookThunks';

import type { ITypesDataBook } from '@/interfaces/bookInterfaces';

const getInitialState = () => ({
  books: [] as ITypesDataBook[],
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

      state.books = action.payload;
    });
  },
});

export const { reducer: booksReducer } = booksSlice;
