/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { booksService } from '@/api/services';
import type { ITypesDataBook } from '@/interfaces/bookInterfaces';

import { Poster, ProductInfo } from './components';

import { ProductItemStyled } from './Product.styles';
import { useAppSelector, useAppDispatch } from '@/redux/store';

import { bookThunks } from '@/redux/books/bookThunks';

interface ITypesProps {
  className?: string;
}

const ProductItem: React.FC<ITypesProps> = (props): JSX.Element => {
  const dispatch = useAppDispatch();
  const [book, setBook] = useState<ITypesDataBook | null>(null);
  const { bookId } = useParams<string>();

  const userId = useAppSelector((state) => state.auth.user.id);

  console.log(bookId);
  console.log(userId);

  useEffect(() => {
    try {
      (async () => {
        const book = dispatch(
          bookThunks.getOneBook({
            bookId: Number(bookId),
            userId: Number(userId),
          }),
        ).unwrap();
        //  const book = await booksService.getOneBook({
        //    bookId: Number(bookId),
        //    userId: Number(userId),
        //  });

        setBook(await book);
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
