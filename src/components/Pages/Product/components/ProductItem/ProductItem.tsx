import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { booksService } from '@/api/services';

import { useAppSelector } from '@/redux/store';

import { Poster, ProductInfo } from './components';

import { ProductItemStyled } from './Product.styles';

import type { ITypesDataBook } from '@/interfaces/bookInterfaces';

interface ITypesProps {
  className?: string;
}

const ProductItem: React.FC<ITypesProps> = (props): JSX.Element => {
  const [book, setBook] = useState<ITypesDataBook>();
  const userId = useAppSelector((state) => state.auth.user.id);

  const { bookId } = useParams<string>();

  useEffect(() => {
    (async () => {
      try {
        const book = await booksService.getOneBook({
          bookId: Number(bookId),
          userId: Number(userId),
        });

        setBook(book);
      } catch (err) {
      /* eslint-disable no-console */
        console.log(err);
      }
    })();
  }, []);

  return (
    <ProductItemStyled className={props.className}>
      <Poster className="product__item_poster" picture={book?.poster} />

      <ProductInfo book={book || null} />
    </ProductItemStyled>
  );
};

export { ProductItem };
