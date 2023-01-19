import { images } from '../../../../../assets';
import { Button, StarRating } from '../../../../UI';
import { BookItemStyled } from './BookItem.styles';

const BookItem: React.FC = (): JSX.Element => {
  return (
    <BookItemStyled>
      <img src={images.bookItemExample} className='book-item__poster' />
      <h4 className='book-item__title'>The Two towers</h4>
      <p className="book-item__author">J. R. R. Tolkien</p>
      <StarRating className="book-item__rating" />
      <Button>$14.99 USD</Button>
    </BookItemStyled>
  );
};

export { BookItem };