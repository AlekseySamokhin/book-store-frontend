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

const getOneBook = createAsyncThunk(
  '/book/one',
  async (values: { bookId: number; userId: number }) => {
    try {
      return await booksService.getOneBook(values);
    } catch (_err) {
      const err = _err as AxiosError;
      throw err.response?.data;
    }
  },
);

const bookThunks = {
  getAllBooks,
  getOneBook,
};

export { bookThunks };
