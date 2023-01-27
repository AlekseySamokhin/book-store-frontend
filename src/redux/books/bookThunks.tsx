/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import { booksService } from '../../api/services';

import type { ITypesRequestFilters } from '@/interfaces/filtersInterfaces';

const getAllBooks = createAsyncThunk(
  'book/all',
  async (filters: ITypesRequestFilters) => {
    try {
      return await booksService.getAllBooks(filters);
    } catch (_err) {
      const err = _err as AxiosError;
      throw err.response?.data;
    }
  },
);

const bookThunks = {
  getAllBooks,
};

export { bookThunks };
