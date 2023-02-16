import { Link } from 'react-router-dom';

import { Button } from '@/components/ui';

import { images } from '@/assets';

import { BookBannerStyled } from './BookBanner.styles';

interface ITypeProps {
  className?: string;
}

const BookBanner: React.FC<ITypeProps> = (props) => {
  const randomInteger = (min: number, max: number) => {
    const rand = min + Math.random() * (max - min);
    return Math.round(rand);
  };

  const randomBookId = randomInteger(1, 20);

  return (
    <BookBannerStyled className={props.className}>
      <div className="book-banner__text">
        <h2 className="book-banner__title">Build your library with us</h2>

        <p className="book-banner__description">
          Buy two books and get one for free
        </p>

        <Link to={`/product/${randomBookId}`}>
          <Button className="book-banner__button">Choose a book</Button>
        </Link>
      </div>

      <img
        className="book-banner__image"
        src={images.bookBannerGirlWithBook}
        alt="Banner image"
      />
    </BookBannerStyled>
  );
};

export { BookBanner };
