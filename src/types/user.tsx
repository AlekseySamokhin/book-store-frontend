interface IUserStateType {
  user: IUserType;
}

interface IUserType {
  id: number;
  fullName: string;
  email: string;
  password: string;
}

interface IAuthRequestType {
  email: string;
  password: string;
}

interface IAuthResponseType {
  user: IUserType;
  accessToken: string;
}

export type { IUserStateType, IUserType, IAuthRequestType, IAuthResponseType };
