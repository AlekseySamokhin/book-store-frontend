import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { booksService } from '@/api/services';

import { Poster, ProductInfo } from './components';
import type { ITypeDataBook } from '@/interfaces/bookInterfaces';

import { ProductItemStyled } from './Product.styles';

interface ITypeProps {
  className?: string;
}

const ProductItem: React.FC<ITypeProps> = (props) => {
  const [book, setBook] = useState<ITypeDataBook>();
  const [personalRating, setPersonalRating] = useState<number>();

  const { bookId } = useParams<string>();

  useEffect(() => {
    (async () => {
      try {
        const { book, personalRating } = await booksService.getOneBook({
          bookId: Number(bookId),
        });

        setPersonalRating(personalRating);
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

      <ProductInfo personalRating={personalRating || 0} book={book || null} />
    </ProductItemStyled>
  );
};

export { ProductItem };
