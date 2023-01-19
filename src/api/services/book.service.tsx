/* eslint-disable no-console */
// import { instance } from '../instance';

const API_BOOK_URL = '/books';

const getAllBooks = () => {
  console.log(API_BOOK_URL);
};

const bookService = {
  getAllBooks,
};

export { bookService };
