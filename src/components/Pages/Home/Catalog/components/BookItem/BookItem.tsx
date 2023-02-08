/* eslint-disable no-console */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

import type { ITypeDataBook } from '@/interfaces/bookInterfaces';
import { Button } from '@/components/ui';
import { BookStatus } from './BookStatus';

import { icons } from '@/assets';
import { BookItemStyled } from './BookItem.styles';
import { booksService } from '@/api/services';

interface ITypesProps {
  book: ITypeDataBook;
  className?: string;
}

interface ITypeFavoriteBook {
  id: number;
  bookId: number;
  userId: number;
}

const BookItem: React.FC<ITypesProps> = (props) => {
  const [favoritesBooks, setFavoritesBooks] = useState<ITypeFavoriteBook[]>([]);

  console.log(favoritesBooks);

  const handleAddFavorite = async () => {
    const favoriteBooks = await booksService.addFavorite({
      bookId: Number(props.book.bookId),
    });

    setFavoritesBooks(favoriteBooks);
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
