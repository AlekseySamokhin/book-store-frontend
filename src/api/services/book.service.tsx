/* eslint-disable no-console */
import { api } from '../axios-instance';

const BOOK_URL = '/book';

export interface ITypesDataBook {
  id: string;
  title: string;
  author: string;
  price: number;
  description: number;
  rate: number;
  poster: string;
}

interface ITypeRequestChangeRating {
  id: number;
  rate: number;
}

interface ITypeRequestGetOneBook {
  id: number;
}

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

const changeBookRating = async (params: ITypeRequestChangeRating) => {
  const response = await api.patch<ITypesDataBook>(
    `${BOOK_URL}/change-rating}`,
    params,
  );

  return response.data;
};

const bookService = {
  getAllBooks,
  getOneBook,
  changeBookRating,
};

export { bookService };
