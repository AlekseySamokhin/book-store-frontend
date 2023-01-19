import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

interface ITypesBookState {
  id: number;
  name: string;
  author: string;
  price: string;
  rating: string;
  photo: string;
}

interface ITypeBookState {
  book: ITypesBookState;
}

const initialStateBook: ITypesBookState = {
  id: 0,
  name: '',
  author: '',
  price: '',
  rating: '',
  photo: '',
};

const getInitialState = (): ITypeBookState => ({
  book: initialStateBook,
});

const booksSlice = createSlice({
  name: 'bookSlice',
  initialState: getInitialState(),
  reducers: {},
});

export const { reducer: bookReducer } = booksSlice;
