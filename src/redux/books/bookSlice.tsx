import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

interface IBookState {
  id: number;
  name: string;
  photo: string;
}

const initialState: IBookState = {
  id: 0,
  name: '',
  photo: '',
};

const booksSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const { reducer: bookReducer } = booksSlice;
