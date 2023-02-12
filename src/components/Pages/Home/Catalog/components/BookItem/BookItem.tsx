/* eslint-disable no-console */
import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';

import { useAppDispatch, useAppSelector } from '@/redux/store';
import { bookThunks } from '@/redux/books/bookThunks';

import { BookStatus } from './BookStatus';

import { icons } from '@/assets';
import { Button } from '@/components/ui';

import type { ITypeDataBook } from '@/interfaces/bookInterfaces';

import { BookItemStyled } from './BookItem.styles';
import { cartService } from '@/api/services';

interface ITypesProps {
  book: ITypeDataBook;
  className?: string;
}

const BookItem: React.FC<ITypesProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const email = useAppSelector((store) => store.auth.user.email);
  const favoritesBooks = useAppSelector((store) => store.auth.favoritesBooks);

  const checkForLikes = (array: ITypeDataBook[]) => {
    const arrayIdBooks = array.map((item) => item.bookId);
    return arrayIdBooks.includes(props.book.bookId);
  };

  const hasLike = useMemo(() => checkForLikes(favoritesBooks), [favoritesBooks]);

  const handleAddFavoriteBook = async () => {
    if (!email) {
      navigate('/signin');
    }

    if (!hasLike) {
      dispatch(
        bookThunks.addFavoriteBook({ bookId: Number(props.book.bookId) }),
      );
    }

    if (hasLike) {
      dispatch(
        bookThunks.deleteFavoriteBook({ bookId: Number(props.book.bookId) }),
      );
    }
  };

  const handleAddCartBook = async () => {
    if (!email) {
      navigate('/signin');
    }

    await cartService.addCartBook({ bookId: Number(props.book.bookId) });
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

      <Button onClick={handleAddCartBook} className="book-item__button">
        $ {`${props.book.price}`} USD
      </Button>
    </BookItemStyled>
  );
};

export { BookItem };
