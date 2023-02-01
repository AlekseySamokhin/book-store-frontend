interface ITypesDataBook {
  bookId: string;
  title: string;
  author: string;
  price: number;
  description: number;
  poster: string;
  isNew: boolean;
  isBestseller: boolean;
  rating: number;
}

interface ITypesInfoBooks {
  pagesQty: number;
  currentPage: number;
  nextPage: number;
  prevPage: number;
}

interface ITypeRequestGetOneBook {
  id: number;
}

export type { ITypesDataBook, ITypeRequestGetOneBook, ITypesInfoBooks };
