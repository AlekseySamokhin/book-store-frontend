/* eslint-disable no-console */
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../redux/store';

import { bookThunks } from '../../../../../redux/books/bookThunks/bookThunks';

import { Select } from '../../../../UI';
import { BookItem } from '../BookItem';

import { CatalogStyled } from './Catalog.styles';

interface ITypeProps {
  searchValue: string;
}

const Catalog: React.FC<ITypeProps> = (props): JSX.Element => {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(bookThunks.getAllBooks());
    // (async () => {
    //   try {
    //     dispatch(bookThunks.getAllBooks);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // })();
  }, [dispatch]);

  return (
    <CatalogStyled>
      <div className="catalog__header">
        <h2 className="catalog__header_title">Catalog</h2>
        <div className="catalog__header_select">
          <Select title="Genre" />
          <Select title="Price" />
          <Select title="Sort by price" />
        </div>
      </div>
      <div className="catalog__booklist">
        {books
          .filter((item) => {
            if (item.title.toLowerCase().includes(props.searchValue.toLowerCase())) {
              return true;
            }

            return false;
          })
          .map((item) => (
            <BookItem
              key={item.id}
              className="catalog__booklist_item"
              {...item}
            />
          ))}
      </div>
    </CatalogStyled>
  );
};

export { Catalog };
