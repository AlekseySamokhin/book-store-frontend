import { Link } from 'react-router-dom';

import { Button } from '@/components/ui';
import { FlexStyled } from '@/components/styles';

import { images } from '@/assets';

import { BookBannerStyled } from './BookBanner.styles';

interface ITypeProps {
  className?: string;
}

const BookBanner: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <BookBannerStyled className={props.className}>
      <FlexStyled position="relative" align="start" zIndex="1" direction="column">
        <h2 className="book-banner__title">Build your library with us</h2>
        <p className="book-banner__description">
          Buy two books and <br /> get one for free
        </p>
        <Link to="book">
          <Button className='book-banner__button'>Choose a book</Button>
        </Link>

        <img
          className="book-banner__image-background"
          src={images.bookBannerBooks}
          alt="Banner image"
        />
      </FlexStyled>

      <img
        className="book-banner__image"
        src={images.bookBannerGirlWithBook}
        alt="Banner image"
      />
    </BookBannerStyled>
  );
};

export { BookBanner };
