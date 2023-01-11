import { createSlice } from '@reduxjs/toolkit';

import { userThunks } from './usersThunks';
import type { IUserType, IUserStateType } from '../../types/user';

const initialUser: IUserType = {
  id: 0,
  fullName: '',
  email: '',
  password: '',
};

const getInitialState = (): IUserStateType => ({
  user: initialUser,
});

const usersSlice = createSlice({
  name: 'userSlice',
  initialState: getInitialState(),
  reducers: {
    signOut: () => {
      return getInitialState();
    },
  },

  extraReducers: (builder) => {
    builder.addCase(userThunks.getCurrentUser.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.user = action.payload;
    });

    builder.addCase(userThunks.signUp.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.user = action.payload;
    });

    builder.addCase(userThunks.signIn.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.user = action.payload;
    });
  },
});

const userActions = usersSlice.actions;

export { userActions };

export const usersReducer = usersSlice.reducer;
