import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { booksService } from '@/api/services';

import { ProductInfo, ProductHeader } from './components';
import type { ITypeDataBook } from '@/interfaces/bookInterfaces';

import { ProductItemStyled } from './ProductItem.styles';

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
  }, [bookId]);

  return (
    <ProductItemStyled className={props.className}>
      <img className="product__item_poster" src={book?.poster} />

      <ProductHeader
        className="product__item_header"
        bookId={book?.bookId}
        title={book?.title}
        author={book?.author}
        personalRating={personalRating}
        averageRating={book?.averageRating}
      />

      <ProductInfo
        className="product__item_info"
        personalRating={personalRating || 0}
        book={book || null}
      />
    </ProductItemStyled>
  );
};

export { ProductItem };
