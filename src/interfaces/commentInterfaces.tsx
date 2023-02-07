import type { ITypeDataUser } from './userInterfaces';

interface ITypeComment {
  bookId: number;
  dateOfcreation: Date;
  id: number;
  text: string;
  user: ITypeDataUser;
  userId: number;
}

export type { ITypeComment };
