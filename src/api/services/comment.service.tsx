import { api } from '../axios-instance';

const COMMENT_URL = '/comment';

const addComment = async (params: { text: string; bookId: number }) => {
  const response = await api.post(`${COMMENT_URL}/add`, params);

  return response.data;
};

const getComments = async (params: { bookId: number }) => {
  const response = await api.get(`${COMMENT_URL}/get`, { params });

  return response.data;
};

const commentService = {
  addComment,
  getComments,
};

export { commentService };
