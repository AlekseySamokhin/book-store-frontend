import { Link } from 'react-router-dom';

import { Button, MenuItem, FiveStarsRating } from '@/components/ui';
import { icons } from '@/assets';

import type { ITypesDataBook } from '@/interfaces/bookInterfaces';
import { BookStatus } from './BookStatus';

import { BookItemStyled } from './BookItem.styles';

interface ITypesProps {
  book: ITypesDataBook;
  className?: string;
}

const BookItem: React.FC<ITypesProps> = (props): JSX.Element => {
  return (
    <BookItemStyled className={props.className}>
      <Link
        className="book__item__link"
        to={{ pathname: `product/${props.book.bookId}` }}
      >
        <div className="book-item__poster">
          <img className="book-item__image" src={props.book.poster} />

          {(props.book.isNew || props.book.isBestseller) && (
            <BookStatus
              className="book-item__status"
              isBestseller={props.book.isBestseller}
              isNew={props.book.isNew}
            />
          )}

          <MenuItem path="cart" className="book-item__like" icon={icons.like} />
        </div>

        <h4 className="book-item__title">{props.book.title}</h4>

        <p className="book-item__author">{props.book.author}</p>

        <div className="book-item__rating">
          <FiveStarsRating readOnly={true} value={props.book.rating} />

          <span className="book-item__rating_number">{props.book.rating}</span>
        </div>
      </Link>

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
