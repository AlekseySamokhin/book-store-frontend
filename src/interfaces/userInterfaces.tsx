import type { ITypeDataBook } from './bookInterfaces';

interface ITypeStateUser {
  user: ITypeDataUser;
  favoritesBooks: ITypeDataBook[];
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
};
