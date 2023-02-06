/* eslint-disable no-console */
// import { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '@/redux/store';

import { StarRating } from './components/StarRating';
import { FiveStarsRating } from '@/components/ui';
import { RateThisBook } from './components/RateThisBook';

import { RatingStyled } from './Rating.styles';
import { bookThunks } from '@/redux/books/bookThunks';

interface ITypeProps {
  className?: string;
  bookId: string;
  averageRating: number;
  personalRating: number;
}

const Rating: React.FC<ITypeProps> = (props): JSX.Element => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user.id);

  const handleChangeRate = (newRate: number) => {
    dispatch(
      bookThunks.setRatingBook({
        bookId: Number(props.bookId),
        userId,
        rate: newRate,
      }),
    );
  };

  return (
    <RatingStyled className={props.className}>
      <StarRating
        className="product__item_rating_star"
        averageRating={props.averageRating || 0}
      />

      <FiveStarsRating
        className="product__item_rating_five_star"
        personalRating={props.personalRating || 0}
        changeRate={handleChangeRate}
        readOnly={false}
      />

      <RateThisBook />
    </RatingStyled>
  );
};

export { Rating };
