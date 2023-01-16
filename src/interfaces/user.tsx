interface IUserStateType {
  user: ITypesDataUser;
}

interface ITypesDataUser {
  id: number;
  fullName: string;
  email: string;
  password: string;
  avatar: string;
  dob?: string | null;
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
  password: string;
}

interface ITypeUpdatedAvatarUser {
  imageURL: string;
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
