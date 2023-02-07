/* eslint-disable no-console */
import { api } from '../axios-instance';

const RATING_URL = '/book';

const addRating = async (params: {
  bookId: number;
  userId: number;
  rate: number;
}) => {
  const response = await api.post(`${RATING_URL}/add`, params);

  return response.data;
};

const ratingService = {
  addRating,
};

export { ratingService };
