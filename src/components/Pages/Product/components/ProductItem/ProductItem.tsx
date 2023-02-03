/* eslint-disable no-console */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppSelector, useAppDispatch } from '@/redux/store';
import { bookThunks } from '@/redux/books/bookThunks';

import { Poster, ProductInfo } from './components';

import { ProductItemStyled } from './Product.styles';

interface ITypesProps {
  className?: string;
}

const ProductItem: React.FC<ITypesProps> = (props): JSX.Element => {
  const book = useAppSelector((state) => state.shop.books[0]);
  const userId = useAppSelector((state) => state.auth.user.id);

  const dispatch = useAppDispatch();

  const { bookId } = useParams<string>();

  console.log(bookId);
  console.log(userId);

  useEffect(() => {
    try {
      (async () => {
        dispatch(
          bookThunks.getOneBook({
            bookId: Number(bookId),
            userId: Number(userId),
          }),
        ).unwrap();
      })();
    } catch (err) {
      toast.error((err as { message: string }).message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, []);

  return (
    <ProductItemStyled className={props.className}>
      <Poster className="product__item_poster" picture={book?.poster} />

      <ProductInfo book={book} />
    </ProductItemStyled>
  );
};

export { ProductItem };
