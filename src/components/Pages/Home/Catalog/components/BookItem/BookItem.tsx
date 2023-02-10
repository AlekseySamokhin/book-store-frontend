import { Link, useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';

import { useAppDispatch, useAppSelector } from '@/redux/store';
import { bookThunks } from '@/redux/books/bookThunks';

import { BookStatus } from './BookStatus';

import { icons } from '@/assets';
import { Button } from '@/components/ui';

import type { ITypeDataBook } from '@/interfaces/bookInterfaces';

import { BookItemStyled } from './BookItem.styles';

interface ITypesProps {
  book: ITypeDataBook;
  className?: string;
}

const BookItem: React.FC<ITypesProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const email = useAppSelector((store) => store.auth.user.email);
  const favoritesBooks = useAppSelector((store) => store.auth.favoritesBooks);

  const arrayIdFavoriteBook = favoritesBooks.map((book) => book.bookId);
  const likedBook = arrayIdFavoriteBook.includes(props.book.bookId);

  const handleAddFavorite = async () => {
    if (!email) {
      navigate('/signin');
    }

    if (!likedBook) {
      dispatch(
        bookThunks.addFavoriteBook({ bookId: Number(props.book.bookId) }),
      );
    }

    if (likedBook && arrayIdFavoriteBook.length !== 0) {
      dispatch(
        bookThunks.deleteFavoriteBook({ bookId: Number(props.book.bookId) }),
      );
    }
  };

  return (
    <BookItemStyled className={props.className}>
      <div className="book-item__poster">
        <Link
          className="book__item__link"
          to={{ pathname: `product/${props.book.bookId}` }}
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

        <div onClick={handleAddFavorite} className="book-item__like">
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

      {/* <Link
        className="book-item__link"
        to={{ pathname: `product/${props.book.bookId}` }}
      > */}
      <Button className="book-item__button">
        $ {`${props.book.price}`} USD
      </Button>
      {/* </Link> */}
    </BookItemStyled>
  );
};

export { BookItem };
