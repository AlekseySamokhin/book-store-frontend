/* eslint-disable no-console */
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { bookThunks } from '../../../../redux/books/bookThunks';

import { BookItem, PanelFilters } from './components';

import { CatalogStyled } from './Catalog.styles';

import type { ITypesRequestFilters } from '@/interfaces/filtersInterfaces';

interface ITypeProps {
  searchValue: string;
}

const Catalog: React.FC<ITypeProps> = (props): JSX.Element => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const books = useAppSelector((state) => state.books.books);

  const filters: ITypesRequestFilters = {
    genres: searchParams.get('genres'),
  };

  useEffect(() => {
    try {
      dispatch(bookThunks.getAllBooks(filters));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err); // TODO
    }
  }, [dispatch, searchParams]);

  return (
    <CatalogStyled>
      <div className="catalog__header">
        <h2 className="catalog__header_title">Catalog</h2>

        <PanelFilters />
      </div>

      <div className="catalog__booklist">
        {books
          .filter((item) => {
            if (
              item.title.toLowerCase().includes(props.searchValue.toLowerCase())
            ) {
              return true;
            }

            return false;
          })
          .map((book) => (
            <BookItem
              key={book.bookId}
              className="catalog__booklist_item"
              {...book} // TODO
            />
          ))}
      </div>
    </CatalogStyled>
  );
};

export { Catalog };
