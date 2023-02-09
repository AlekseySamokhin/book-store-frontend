import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import { booksService, ratingService } from '@/api/services';

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
  'book/one',
  async (values: { bookId: number; userId: number }) => {
    try {
      return await booksService.getOneBook(values);
    } catch (_err) {
      const err = _err as AxiosError;
      throw err.response?.data;
    }
  },
);

const setRatingBook = createAsyncThunk(
  'book/set-rating',
  async (values: { bookId: number; userId: number; rate: number }) => {
    try {
      return await ratingService.addRating(values);
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
  getOneBook,
  setRatingBook,
  addFavoriteBook,
  deleteFavoriteBook,
};

export { bookThunks };
