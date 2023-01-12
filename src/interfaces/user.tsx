interface IUserStateType {
  user: ITypesDataUser;
}

interface ITypesDataUser {
  id: number;
  fullName: string;
  email: string;
  password: string;
  avatar: string;
}

interface IAuthRequestType {
  email: string;
  password: string;
}

interface IAuthResponseType {
  user: ITypesDataUser;
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
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

interface ITypeUpdatedAvatarUser {
  avatar: string;
}

export type {
  IUserStateType,
  ITypesDataUser,
  IAuthRequestType,
  IAuthResponseType,
  IUpdatedDataUserType,
  ITypesUpdatedInfoUser,
  ITypesUpdatedPasswordsUser,
  ITypeUpdatedAvatarUser,
};
