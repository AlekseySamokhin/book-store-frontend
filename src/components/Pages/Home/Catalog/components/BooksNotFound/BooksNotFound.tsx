import { images } from '@/assets';

import { BooksNotFoundStyled } from './BooksNotFound.styles';

const BooksNotFound: React.FC = () => {
  return (
    <BooksNotFoundStyled>
      <img
        className="books-not-found__image"
        src={images.sadSmile}
        alt="icon sad smile"
      />

      <p className="books-not-found__text">Books were not found!</p>
    </BooksNotFoundStyled>
  );
};

export { BooksNotFound };
