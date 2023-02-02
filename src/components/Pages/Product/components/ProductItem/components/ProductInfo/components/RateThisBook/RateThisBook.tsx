import { icons } from '@/assets';

import { RateThisBookStyled } from './RateThisBook.styles';

const RateThisBook: React.FC = () => {
  return (
    <RateThisBookStyled>
      <img
        className="rating_this_book_arrow"
        src={icons.arrowBack}
        alt="Icon arrow back"
      />

      <span className="rating_this_book_text">Rate this book</span>
    </RateThisBookStyled>
  );
};

export { RateThisBook };
