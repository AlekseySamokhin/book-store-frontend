import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IUserType {
  id: number;
  fullName: string;
  email: string;
  password: string;
  dob: string;
}

interface IUserState {
  user: IUserType;
}

const initialUser: IUserType = {
  id: 0,
  fullName: '',
  email: '',
  password: '',
  dob: '',
};

const initialState: IUserState = {
  user: initialUser,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUserType>): void => {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;

      // eslint-disable-next-line no-console
      console.log(state.user);
    },
  },
});

export const { login } = userSlice.actions;

export const userReducer = userSlice.reducer;
