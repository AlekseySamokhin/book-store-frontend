interface ITypesDataBook {
  id: string;
  title: string;
  author: string;
  price: number;
  description: number;
  rate: number;
  poster: string;
}

interface ITypeRequestGetOneBook {
  id: number;
}

export type { ITypesDataBook, ITypeRequestGetOneBook };
