import { useState } from 'react';

import { ratingService } from '@/api/services';

import { FiveStarsRating } from '@/components/ui';
import { RateThisBook, StarRating } from './components';

import { RatingStyled } from './Rating.styles';

interface ITypeProps {
  className?: string;
  bookId: string;
  averageRating: number;
  personalRating: number;
}

const Rating: React.FC<ITypeProps> = (props) => {
  const [personalRating, setPersonalRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  const handleChangeRate = async (newRate: number) => {
    try {
      const { personalRating, averageRating } = await ratingService.addRating({
        rate: newRate,
        bookId: Number(props.bookId),
      });

      setPersonalRating(personalRating);

      setAverageRating(averageRating);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return (
    <RatingStyled className={props.className}>
      <StarRating
        className="product__item_rating_star"
        averageRating={averageRating || props.averageRating}
      />

      <div className='product__item_rating_left_block'>
        <FiveStarsRating
          className="product__item_rating_five_star"
          personalRating={personalRating || props.personalRating}
          changeRate={handleChangeRate}
          readOnly={false}
        />

        <RateThisBook />
      </div>
    </RatingStyled>
  );
};

export { Rating };
