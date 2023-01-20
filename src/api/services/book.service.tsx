/* eslint-disable no-console */
import { instance } from '../instance';

const API_BOOK_URL = '/book';

interface ITypesDataBook {
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

const getAllBooks = async () => {
  const response = await instance.get<ITypesDataBook[]>(`${API_BOOK_URL}/all`);

  return response.data;
};

const changeBookRating = async (params: ITypeRequestChangeRating) => {
  const response = await instance.patch<ITypesDataBook>(
    `${API_BOOK_URL}/change-rating}`,
    params,
  );

  return response.data;
};

const bookService = {
  getAllBooks,
  changeBookRating,
};

export { bookService };
