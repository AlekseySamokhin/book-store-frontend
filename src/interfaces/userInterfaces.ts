import type { ITypeDataBook } from './bookInterfaces';

interface ITypeStateUser {
  user: ITypeDataUser;
  favorites: ITypeDataBook[];
  cart: ITypeCartUser[];
}

interface ITypeResponseCurUser {
  currentUser: ITypeDataUser;
  favoritesBooksArray: ITypeDataBook[];
  cartUser: ITypeCartUser[];
}

interface ITypeCartUser {
  id: number;
  count: string;
  book: ITypeDataBook;
}

interface ITypeDataUser {
  id: number;
  fullName: string;
  email: string;
  password: string;
  avatar: string;
}

interface ITypesAuthRequest {
  email: string;
  password: string;
}

interface IAuthResponseType {
  user: ITypeDataUser;
  accessToken: string;
  cart: ITypeCartUser[];
  favorites: ITypeDataBook[];
}

interface IUpdatedDataUserType {
  fullName: string;
  email: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface ITypesUpdatedInfoUser {
  fullName: string;
  email: string;
}

interface ITypesUpdatedPasswordsUser {
  password: string;
}

interface ITypeUpdatedAvatarUser {
  imageURL: string;
}

export type {
  ITypeStateUser,
  ITypeDataUser,
  ITypesAuthRequest,
  IAuthResponseType,
  IUpdatedDataUserType,
  ITypesUpdatedInfoUser,
  ITypesUpdatedPasswordsUser,
  ITypeUpdatedAvatarUser,
  ITypeResponseCurUser,
  ITypeCartUser,
};
