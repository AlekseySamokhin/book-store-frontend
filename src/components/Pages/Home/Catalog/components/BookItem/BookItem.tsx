import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Rating from '@mui/material/Rating';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '@/redux/store';
import { bookThunks } from '@/redux/books/bookThunks';
import { userThunks } from '@/redux/users/thunks';
import { cartService } from '@/api/services';

import { icons } from '@/assets';
import { Button } from '@/components/ui';
import { BookStatus } from './BookStatus';

import type { ITypeDataBook } from '@/interfaces/bookInterfaces';
import type { ITypeCartUser } from '@/interfaces/userInterfaces';

import { BookItemStyled } from './BookItem.styles';

interface ITypeProps {
  book: ITypeDataBook;
  className?: string;
}

const BookItem: React.FC<ITypeProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const email = useAppSelector((store) => store.auth.user.email);
  const favorites = useAppSelector((store) => store.auth.favorites);
  const cart = useAppSelector((store) => store.auth.cart);

  const checkForCart = (array: ITypeCartUser[]) => {
    const arrayIdBooks = array.map((item) => item.book.bookId);

    return arrayIdBooks.includes(props.book.bookId);
  };

  const checkForLikes = (array: ITypeDataBook[]) => {
    const arrayIdBooks = array.map((item) => item.bookId);

    return arrayIdBooks.includes(props.book.bookId);
  };

  const hasCart = useMemo(() => checkForCart(cart), [cart]);

  const hasLike = useMemo(() => checkForLikes(favorites), [favorites]);

  const handleAddFavoriteBook = async () => {
    if (!email) {
      navigate('/signin');
    }

    try {
      if (!hasLike) {
        dispatch(
          bookThunks.addFavoriteBook({ bookId: Number(props.book.bookId) }),
        ).unwrap();
      }

      if (hasLike) {
        dispatch(
          bookThunks.deleteFavoriteBook({ bookId: Number(props.book.bookId) }),
        ).unwrap();
      }
    } catch (err) {
      toast.error((err as { message: string }).message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleAddCartBook = async () => {
    if (!email) {
      navigate('/signin');
    }

    try {
      await cartService.addCartBook({ bookId: Number(props.book.bookId) });
      dispatch(userThunks.getCart()).unwrap();
    } catch (err) {
      toast.error((err as { message: string }).message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <BookItemStyled like={hasLike} className={props.className}>
      <div className="book-item__poster">
        <Link
          className="book__item__link"
          to={{ pathname: `/product/${props.book.bookId}` }}
        >
          <img className="book-item__image" src={props.book.poster} />
        </Link>

        {(props.book.isNew || props.book.isBestseller) && (
          <BookStatus
            className="book-item__status"
            isBestseller={props.book.isBestseller}
            isNew={props.book.isNew}
          />
        )}

        <div onClick={handleAddFavoriteBook} className="book-item__like">
          <img
            className="book-item__like_icon"
            src={icons.like}
            alt="icons like book"
          />
        </div>
      </div>

      <h4 className="book-item__title">{props.book.title}</h4>

      <p className="book-item__author">{props.book.author}</p>

      <div className="book-item__rating">
        <Rating
          value={props.book.averageRating}
          readOnly={true}
          size="large"
          sx={{
            color: '#BFCC94',
          }}
        />

        <span className="book-item__rating_number">
          {Number.isInteger(props.book.averageRating) &&
          props.book.averageRating !== 0
            ? `${props.book.averageRating}.0`
            : props.book.averageRating}
        </span>
      </div>
      {hasCart ? (
        <Button className="book-item__button outlined" outlined>
          Added to cart
        </Button>
      ) : (
        <Button
          onClick={handleAddCartBook}
          className="book-item__button default"
        >
          $ {`${props.book.price}`} USD
        </Button>
      )}
    </BookItemStyled>
  );
};

export { BookItem };
