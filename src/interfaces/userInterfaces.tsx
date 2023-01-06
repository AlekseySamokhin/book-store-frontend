export interface IUserStateType {
  user: IUserType;
}

export interface IUserType {
  id: number;
  fullName: string;
  email: string;
  password: string;
}

export interface IAuthRequestType {
  email: string;
  password: string;
}

export interface IAuthSignupResponse {
  newUser: IUserType;
  accessToken: string;
}

export interface IAuthSigninResponse {
  existUser: IUserType;
  accessToken: string;
}
