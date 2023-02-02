/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-console */
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '@/redux/store';
import { bookThunks } from '@/redux/books/bookThunks';
import type { ITypesRequestFilters } from '@/interfaces/bookInterfaces';

import {
  BookItem,
  PanelFilters,
  Pagination,
  BooksNotFound,
} from './components';

import { CatalogStyled } from './Catalog.styles';

interface ITypeProps {
  className?: string;
}

const Catalog: React.FC<ITypeProps> = (props): JSX.Element => {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.store.books);
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: ITypesRequestFilters = {
    genres: searchParams.get('genres'),
    minPrice: searchParams.get('minPrice'),
    maxPrice: searchParams.get('maxPrice'),
    sort: searchParams.get('sort'),
    page: searchParams.get('page'),
    search: searchParams.get('search'),
  };

  useEffect(() => {
    setSearchParams({});
  }, []);

  useEffect(() => {
    try {
      dispatch(bookThunks.getAllBooks(filters)).unwrap();
    } catch (err) {
      toast.error((err as { message: string }).message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [dispatch, searchParams]);

  return (
    <CatalogStyled className={props.className}>
      <div className="catalog__header">
        <h2 className="catalog__header_title">Catalog</h2>
        <PanelFilters />
      </div>

      <div className="catalog__booklist">
        {!!books.length ? (
          books.map((book) => (
            <BookItem
              key={book.bookId}
              className="catalog__booklist_item"
              book={book}
            />
          ))
        ) : (
          <BooksNotFound />
        )}
      </div>

      <div className="catalog__pagination">
        <Pagination />
      </div>
    </CatalogStyled>
  );
};

export { Catalog };
