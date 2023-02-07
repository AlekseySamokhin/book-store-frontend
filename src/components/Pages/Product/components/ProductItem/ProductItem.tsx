/* eslint-disable no-console */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import { booksService } from '@/api/services';

import { useAppSelector, useAppDispatch } from '@/redux/store';

import { bookThunks } from '@/redux/books/bookThunks';

import { Poster, ProductInfo } from './components';

import { ProductItemStyled } from './Product.styles';

// import type { ITypeDataBook } from '@/interfaces/bookInterfaces';

interface ITypesProps {
  className?: string;
}

const ProductItem: React.FC<ITypesProps> = (props): JSX.Element => {
  const dispatch = useAppDispatch();
  // const [book, setBook] = useState<ITypeDataBook>();
  // const [personalRating, setPersonalRating] = useState<number>();
  const userId = useAppSelector((state) => state.auth.user.id);
  const book = useAppSelector((state) => state.shop.books[0]);
  const personalRating = useAppSelector((state) => state.shop.personalRating);

  const { bookId } = useParams<string>();

  useEffect(() => {
    (async () => {
      try {
        dispatch(
          bookThunks.getOneBook({
            bookId: Number(bookId),
            userId: Number(userId),
          }),
        );

        // const { book, personalRating } = await booksService.getOneBook({
        //   bookId: Number(bookId),
        //   userId: Number(userId),
        // });

        // setPersonalRating(personalRating);
        // setBook(book);
      } catch (err) {
        /* eslint-disable no-console */
        console.log(err);
      }
    })();
  }, []);

  return (
    <ProductItemStyled className={props.className}>
      <Poster className="product__item_poster" picture={book?.poster} />

      <ProductInfo
        personalRating={personalRating || 0}
        book={book || null}
      />
    </ProductItemStyled>
  );
};

export { ProductItem };
