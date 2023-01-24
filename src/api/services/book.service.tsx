import { api } from '../axios-instance';

import type { ITypesDataBook, ITypeRequestGetOneBook } from '../../interfaces/bookInterfaces';

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

const bookService = {
  getAllBooks,
  getOneBook,
};

export { bookService };
