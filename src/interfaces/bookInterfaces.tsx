interface ITypesDataBook {
  bookId: string;
  title: string;
  author: string;
  price: number;
  description: string;
  poster: string;
  isNew: boolean;
  isBestseller: boolean;
  rating: number;
}

interface ITypesInfoPages {
  pagesQty: number;
  currentPage: number;
  nextPage: number;
  prevPage: number;
}

interface ITypesRequestFilters {
  genres: string | null;
  minPrice: string | null;
  maxPrice: string | null;
  sort: string | null;
  page: string | null;
  search: string | null;
}

export type { ITypesDataBook, ITypesInfoPages, ITypesRequestFilters };
