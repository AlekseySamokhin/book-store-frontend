import { Link } from 'react-router-dom';

import { FlexStyled } from '@/components/styles/Flex.styles.tsx';

import { images } from '@/assets';

import { BookBannerStyled } from './BookBanner.styles';

import { Button } from '@/components/ui/Button';

interface ITypeProps {
  className?: string;
}

const BookBanner: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <BookBannerStyled className={props.className}>
      <FlexStyled align="start" zIndex="1" direction="column">
        <h2 className="book-banner__title">Build your library with us</h2>
        <p className="book-banner__description">
          Buy two books and <br /> get one for free
        </p>
        <Link to="book">
          <Button>Choose a book</Button>
        </Link>
      </FlexStyled>
      <img
        className="book-banner__image"
        src={images.bookBannerGirlWithBook}
        alt="Banner image"
      />
      <img
        className="book-banner__image-background"
        src={images.bookBannerBooks}
        alt="Banner image"
      />
    </BookBannerStyled>
  );
};

export { BookBanner };
