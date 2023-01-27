import { Link } from 'react-router-dom';
import { Button, StarRating } from '../../../../../ui';
import { BookItemStyled } from './BookItem.styles';

interface ITypesProps {
  bookId: string;
  title: string;
  author: string;
  price: number;
  description: number;
  poster: string;
  className: string;
}

const BookItem: React.FC<ITypesProps> = (props: ITypesProps): JSX.Element => {
  return (
    <Link to={{ pathname: `product/${props.bookId}` }}>
      <BookItemStyled className={props.className}>
        <img className="book-item__poster" src={props.poster} />

        <h4 className="book-item__title">{props.title}</h4>
        <p className="book-item__author">{props.author}</p>

        <StarRating
          className="book-item__rating"
          // id={props.id}
          // rate={props.rate}
        />

        <Button>${`${props.price}`} USD</Button>
      </BookItemStyled>
    </Link>
  );
};

export { BookItem };
