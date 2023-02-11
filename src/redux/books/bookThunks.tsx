import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import { booksService } from '@/api/services';

import type { ITypesRequestFilters } from '@/interfaces/bookInterfaces';

const getAllBooks = createAsyncThunk(
  'book/all',
  async (values: ITypesRequestFilters) => {
    try {
      return await booksService.getAllBooks(values);
    } catch (_err) {
      const err = _err as AxiosError;
      throw err.response?.data;
    }
  },
);

const addFavoriteBook = createAsyncThunk(
  'book/add-favorite',
  async (values: { bookId: number }) => {
    try {
      return await booksService.addFavoriteBook(values);
    } catch (_err) {
      const err = _err as AxiosError;
      throw err.response?.data;
    }
  },
);

const deleteFavoriteBook = createAsyncThunk(
  'book/delete-favorite',
  async (values: { bookId: number }) => {
    try {
      return await booksService.deleteFavoriteBook(values);
    } catch (_err) {
      const err = _err as AxiosError;
      throw err.response?.data;
    }
  },
);

const bookThunks = {
  getAllBooks,
  addFavoriteBook,
  deleteFavoriteBook,
};

export { bookThunks };
