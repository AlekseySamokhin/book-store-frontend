import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../redux/store';

import { bookThunks } from '../../../../../redux/books/bookThunks';

import { BookItem, FilterPanel } from './components';

import { CatalogStyled } from './Catalog.styles';

interface ITypeProps {
  searchValue: string;
}

const Catalog: React.FC<ITypeProps> = (props): JSX.Element => {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(bookThunks.getAllBooks());
  }, [dispatch]);

  return (
    <CatalogStyled>
      <div className="catalog__header">
        <h2 className="catalog__header_title">Catalog</h2>

        <FilterPanel />
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
          .map((item) => (
            <BookItem
              key={item.bookId}
              className="catalog__booklist_item"
              {...item}
            />
          ))}
      </div>
    </CatalogStyled>
  );
};

export { Catalog };
