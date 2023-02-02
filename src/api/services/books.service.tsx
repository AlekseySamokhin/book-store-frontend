import { api } from '../axios-instance';

import type {
  ITypesDataBook,
  ITypesInfoPages,
  ITypesRequestFilters,
} from '@/interfaces/bookInterfaces';

const BOOK_URL = '/book';

interface ITypesResponseFilters {
  books: ITypesDataBook[];
  info: ITypesInfoPages;
}

const getAllBooks = async (params: ITypesRequestFilters) => {
  const response = await api.get<ITypesResponseFilters>(`${BOOK_URL}/all`, {
    params,
  });

  return response.data;
};

const getOneBook = async (params: { bookId: number; userId: number }) => {
  const response = await api.get<ITypesDataBook>(`${BOOK_URL}/one`, {
    params,
  });

  return response.data;
};

const getRecommendationBooks = async () => {
  const response = await api.get<ITypesDataBook[]>(
    `${BOOK_URL}/recommendation`,
  );

  return response.data;
};

const getAllGenres = async () => {
  const response = await api.get<{ genreId: number; name: string }[]>(
    `${BOOK_URL}/genres`,
  );

  return response.data;
};

const booksService = {
  getAllBooks,
  getRecommendationBooks,
  getOneBook,
  getAllGenres,
};

export { booksService };
