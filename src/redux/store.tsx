import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { userReducer } from './users/userSlice';
import { bookReducer } from './books/bookSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    books: bookReducer,
  },
});

type RootStateType = ReturnType<typeof store.getState>;
type AppDispatchType = typeof store.dispatch;

export const useAppDispatch: () => AppDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

export { store };
