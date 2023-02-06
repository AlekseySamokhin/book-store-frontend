/* eslint-disable no-console */
import { api } from '../axios-instance';

const RATING_URL = '/book';

const setRating = async (params: {
  bookId: number;
  userId: number;
  rate: number;
}) => {
  const response = await api.post(`${RATING_URL}/set-rating`, params);

  return response.data;
};

const ratingService = {
  setRating,
};

export { ratingService };
