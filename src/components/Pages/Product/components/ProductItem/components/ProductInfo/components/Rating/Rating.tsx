/* eslint-disable no-console */
import { useState } from 'react';

import { useAppSelector } from '@/redux/store';

import { StarRating } from './components/StarRating';
import { FiveStarsRating } from '@/components/ui';
import { RateThisBook } from './components/RateThisBook';

import { RatingStyled } from './Rating.styles';
import { ratingService } from '@/api/services';

interface ITypeProps {
  className?: string;
  bookId: string;
  averageRating: number;
  personalRating: number;
}

const Rating: React.FC<ITypeProps> = (props): JSX.Element => {
  const userId = useAppSelector((state) => state.auth.user.id);
  const [personalRating, setPersonalRating] = useState<number>(0);
  const [averageRating, setAverageRating] = useState<number>(0);

  const handleChangeRate = async (newRate: number) => {
    try {
      const { personalRating, averageRating } = await ratingService.addRating({
        rate: newRate,
        bookId: Number(props.bookId),
        userId,
      });

      setPersonalRating(personalRating);
      setAverageRating(averageRating);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <RatingStyled className={props.className}>
      <StarRating
        className="product__item_rating_star"
        averageRating={averageRating || props.averageRating}
      />

      <FiveStarsRating
        className="product__item_rating_five_star"
        personalRating={personalRating || props.personalRating}
        changeRate={handleChangeRate}
        readOnly={false}
      />

      <RateThisBook />
    </RatingStyled>
  );
};

export { Rating };
