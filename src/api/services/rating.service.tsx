/* eslint-disable no-console */
import { api } from '../axios-instance';

const RATING_URL = '/book';

// const getRating = async (params: { bookId: number }) => {
//   const response = await api.get<{ bookId: number; value: number }>(
//     `${RATING_URL}/get-rating`,
//     { params },
//   );

//   return response.data;
// };

const setRating = async (params: { bookId: number; rate: number }) => {
  const response = await api.post(`${RATING_URL}/set-rating`, params);

  return response.data;
};

const ratingService = {
  // getRating,
  setRating,
};

export { ratingService };
