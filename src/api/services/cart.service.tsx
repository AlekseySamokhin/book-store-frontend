import { api } from '../axios-instance';

import type { ITypeCartUser } from '@/interfaces/userInterfaces';

const CART_URL = '/cart';

const addCartBook = (params: { bookId: number }) => {
  return api.post(`${CART_URL}/add`, {
    params,
  });
};

const deleteCartBook = (params: { cartId: number }) => {
  return api.delete(`${CART_URL}/delete`, {
    params,
  });
};

const getCart = async () => {
  const response = await api.get<ITypeCartUser[]>(`${CART_URL}/all`);

  return response.data;
};

const changeQtyBooksCart = async (params: {cartId: number; count: number}) => {
  const response = await api.patch<ITypeCartUser[]>(`${CART_URL}/change-qty`, {
    params,
  });

  return response.data;
};

const cartService = {
  addCartBook,
  deleteCartBook,
  getCart,
  changeQtyBooksCart,
};

export { cartService };
