interface ITypesDataBook {
  bookId: string;
  title: string;
  author: string;
  price: number;
  description: number;
  poster: string;
}

interface ITypeRequestGetOneBook {
  id: number;
}

export type { ITypesDataBook, ITypeRequestGetOneBook };
