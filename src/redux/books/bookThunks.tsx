/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import { booksService } from '../../api/services';

const getAllBooks = createAsyncThunk('book/all', async () => {
  try {
    return await booksService.getAllBooks();
  } catch (_err) {
    const err = _err as AxiosError;
    throw err.response?.data;
  }
});

const bookThunks = {
  getAllBooks,
};

export { bookThunks };
