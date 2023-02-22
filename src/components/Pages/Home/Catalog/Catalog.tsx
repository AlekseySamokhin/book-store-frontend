import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '@/redux/store';
import { bookThunks } from '@/redux/books/bookThunks';
import type { ITypeRequestFilters } from '@/interfaces/bookInterfaces';

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

const Catalog: React.FC<ITypeProps> = (props) => {
  const dispatch = useAppDispatch();

  const books = useAppSelector((state) => state.shop.books);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    try {
      const select: ITypeRequestFilters = {
        genres: searchParams.get('genres'),
        minPrice: searchParams.get('minPrice'),
        maxPrice: searchParams.get('maxPrice'),
        sort: searchParams.get('sort'),
        page: searchParams.get('page'),
        search: searchParams.get('search'),
      };

      dispatch(bookThunks.getAllBooks(select)).unwrap();
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

        <PanelFilters className="catalog__header_filters" />
      </div>

      <div className="catalog__booklist">
        {books.length ? (
          books.map((book) => {
            return <BookItem key={book.bookId} book={book} />;
          })
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
