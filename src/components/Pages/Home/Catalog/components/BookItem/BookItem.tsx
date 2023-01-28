import { Link } from 'react-router-dom';

import { Button, MenuItem, StarRating } from '@/components/ui';

import { icons } from '@/assets';

import { BookItemStyled } from './BookItem.styles';
import type { ITypesDataBook } from '@/interfaces/bookInterfaces';

import { BookStatus } from './BookStatus';

interface ITypesProps {
  book: ITypesDataBook;
  className?: string;
}

const BookItem: React.FC<ITypesProps> = (props): JSX.Element => {
  return (
    <Link to={{ pathname: `product/${props.book.bookId}` }}>
      <BookItemStyled className={props.className}>
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

        <StarRating className="book-item__rating" />

        <Button>$ {`${props.book.price}`} USD</Button>
      </BookItemStyled>
    </Link>
  );
};

export { BookItem };
