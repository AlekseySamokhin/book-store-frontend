/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import { bookThunks } from './bookThunks';

interface ITypesDataBook {
  id: string;
  title: string;
  author: string;
  price: number;
  description: number;
  rate: number;
  poster: string;
}

const getInitialState = () => ({
  books: [] as ITypesDataBook[],
});

const booksSlice = createSlice({
  name: 'bookSlice',
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
