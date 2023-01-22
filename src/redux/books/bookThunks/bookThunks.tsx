import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import { bookService } from '../../../api/services';

interface ITypesChangeBookRating {
  id: number;
  rate: number;
}

const getAllBooks = createAsyncThunk('book/all', async () => {
  try {
    const data = await bookService.getAllBooks();

    return data;
  } catch (_err) {
    const err = _err as AxiosError;
    throw err.response?.data;
  }
});

const getOneBook = createAsyncThunk('book/one', async (id: number) => {
  try {
    const data = await bookService.getOneBook({ id });

    return data;
  } catch (_err) {
    const err = _err as AxiosError;
    throw err.response?.data;
  }
});

const changeBookRating = createAsyncThunk(
  'book/change-rating',
  async (values: ITypesChangeBookRating) => {
    try {
      const data = await bookService.changeBookRating(values);

      return data;
    } catch (_err) {
      const err = _err as AxiosError;
      throw err.response?.data;
    }
  },
);

const bookThunks = {
  getAllBooks,
  getOneBook,
  changeBookRating,
};

export { bookThunks };
