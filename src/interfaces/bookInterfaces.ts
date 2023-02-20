interface ITypeDataBook {
  bookId: string;
  title: string;
  author: string;
  price: number;
  description: string;
  poster: string;
  isNew: boolean;
  isBestseller: boolean;
  averageRating: number;
}

interface ITypeFavoriteBook {
  bookId: number;
  id: number;
  userId: number;
  book: ITypeDataBook;
}

interface ITypePagination {
  pagesQty: number;
  currentPage: number;
  nextPage: number;
  prevPage: number;
}

interface ITypeRequestFilters {
  genres: string | null;
  minPrice: string | null;
  maxPrice: string | null;
  sort: string | null;
  page: string | null;
  search: string | null;
}

export type { ITypeDataBook, ITypePagination, ITypeRequestFilters, ITypeFavoriteBook };
