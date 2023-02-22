import { createSlice } from '@reduxjs/toolkit';
import { bookThunks } from './bookThunks';

import type {
  ITypeDataBook,
  ITypePagination,
} from '@/interfaces/bookInterfaces';

interface ITypeStateBookSlice {
  books: ITypeDataBook[];
  pagination: ITypePagination;
}

export const initialBook: ITypeDataBook = {
  bookId: '',
  title: '',
  author: '',
  price: 0,
  description: '',
  poster: '',
  isNew: true,
  isBestseller: true,
  averageRating: 0,
};

const initialPagination: ITypePagination = {
  pagesQty: 0,
  currentPage: 0,
  nextPage: 0,
  prevPage: 0,
};

const getInitialState = (): ITypeStateBookSlice => ({
  books: [initialBook],
  pagination: initialPagination,
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
  },
});

export const { reducer: booksReducer } = booksSlice;
