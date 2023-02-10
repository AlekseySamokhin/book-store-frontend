import { api } from '../axios-instance';

import type {
  ITypeDataBook,
  ITypePagination,
  ITypesRequestFilters,
} from '@/interfaces/bookInterfaces';

const BOOK_URL = '/book';

interface ITypesResponseFilters {
  books: ITypeDataBook[];
  info: ITypePagination;
}

interface ITypeResponseGetOneBook {
  book: ITypeDataBook;
  personalRating: number;
}

const getAllBooks = async (params: ITypesRequestFilters) => {
  const response = await api.get<ITypesResponseFilters>(`${BOOK_URL}/all`, {
    params,
  });

  return response.data;
};

const getOneBook = async (params: { bookId: number; userId: number }) => {
  const response = await api.get<ITypeResponseGetOneBook>(`${BOOK_URL}/one`, {
    params,
  });

  return response.data;
};

const getRecommendationBooks = async () => {
  const response = await api.get<ITypeDataBook[]>(`${BOOK_URL}/recommendation`);

  return response.data;
};

const getAllGenres = async () => {
  const response = await api.get<{ genreId: number; name: string }[]>(
    `${BOOK_URL}/genres`,
  );

  return response.data;
};

const addFavoriteBook = async (params: { bookId: number }) => {
  const response = await api.post(`${BOOK_URL}/add-favorite`, params);

  return response.data;
};

const deleteFavoriteBook = async (params: { bookId: number }) => {
  const response = await api.post(`${BOOK_URL}/delete-favorite`, { params });

  return response.data;
};

const getFavoritesBooks = async () => {
  const response = await api.get(`${BOOK_URL}/all-favorites`);

  return response.data;
};

const booksService = {
  getAllBooks,
  getRecommendationBooks,
  getOneBook,
  addFavoriteBook,
  deleteFavoriteBook,
  getFavoritesBooks,
  getAllGenres,
};

export { booksService };
