import { api } from '../axios-instance';

import type { ITypeDataBook } from '@/interfaces/bookInterfaces';

const CART_URL = '/cart';

const addCartBook = (params: { bookId: number }) => {
  return api.post<ITypeDataBook[]>(`${CART_URL}/add`, {
    params,
  });
};

const deleteCartBook = (params: { bookId: number }) => {
  return api.delete<ITypeDataBook[]>(`${CART_URL}/delete`, {
    params,
  });
};

const cartService = {
  addCartBook,
  deleteCartBook,
};

export { cartService };
