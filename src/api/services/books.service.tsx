import { api } from '../axios-instance';

import type { ITypesDataBook, ITypeRequestGetOneBook } from '../../interfaces/bookInterfaces';

interface ITypesProps {
  genreId: number;
  name: string;
}

const BOOK_URL = '/book';

const getAllBooks = async () => {
  const response = await api.get<ITypesDataBook[]>(`${BOOK_URL}/all`);

  return response.data;
};

const getOneBook = async (params: ITypeRequestGetOneBook) => {
  const response = await api.get<ITypesDataBook>(`${BOOK_URL}/one`, {
    params,
  });

  return response.data;
};

const getAllGenres = async () => {
  const response = await api.get<ITypesProps[]>(`${BOOK_URL}/genres`);

  return response.data;
};

const booksService = {
  getAllBooks,
  getAllGenres,
  getOneBook,
};

export { booksService };
