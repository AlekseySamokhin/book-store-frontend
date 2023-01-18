import { Link } from 'react-router-dom';
import { BookBannerStyled } from './BookBanner.styles';
import { Flex } from '../../../styles/Flex';

import { images } from '../../../assets';

import { Button } from '../../Button/Button';

const BookBanner: React.FC = (): JSX.Element => {
  return (
    <BookBannerStyled>
      <Flex align='start' zIndex="1" direction="column">
        <h2 className="book-banner__title">Build your library with us</h2>
        <p className="book-banner__description">
          Buy two books and <br /> get one for free
        </p>
        <Link to="book">
          <Button>Choose a book</Button>
        </Link>
      </Flex>
      <img className='book-banner__image' src={images.bookBannerGirlWithBook} alt="Banner image" />
      <img className='book-banner__image-background' src={images.bookBannerBooks} alt="Banner image" />
    </BookBannerStyled>
  );
};

export { BookBanner };
