import { api } from '../axios-instance';

import type {
  ITypesDataBook,
  ITypeRequestGetOneBook,
  ITypesInfoBooks,
} from '../../interfaces/bookInterfaces';
import type { ITypesRequestFilters } from '@/interfaces/filtersInterfaces';

const BOOK_URL = '/book';

interface ITypesResponseFilters {
  books: ITypesDataBook[];
  info: ITypesInfoBooks;
}

const getAllBooks = async (params: ITypesRequestFilters) => {
  const response = await api.get<ITypesResponseFilters>(`${BOOK_URL}/all`, {
    params,
  });

  return response.data;
};

const getOneBook = async (params: ITypeRequestGetOneBook) => {
  const response = await api.get<ITypesDataBook>(`${BOOK_URL}/one`, {
    params,
  });

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
  getAllGenres,
  getOneBook,
};

export { booksService };
