/* eslint-disable no-console */
import { useState } from 'react';
import Rating from '@mui/material/Rating';

import { FiveStarsRatingStyled } from './FiveStarsRating.styles';
import { useAppSelector, useAppDispatch } from '@/redux/store';

import { bookThunks } from '@/redux/books/bookThunks';

interface ITypesProps {
  value: number;
  bookId?: string;
  readOnly: boolean;
  className?: string;
}

const FiveStarsRating: React.FC<ITypesProps> = (props): JSX.Element => {
  const email = useAppSelector((state) => state.auth.user.email);
  const dispatch = useAppDispatch();
  const [rate, setRate] = useState<number>(0);

  const handleChangeRate = (newRate: number) => {
    dispatch(
      bookThunks.setRatingBook({ bookId: Number(props.bookId), rate: newRate }),
    );
    setRate(newRate);
  };

  return (
    <FiveStarsRatingStyled className={props.className}>
      {email ? (
        <Rating
          onChange={(_, value) => handleChangeRate(value || 0)}
          value={rate}
          precision={0.5}
          readOnly={false}
          size="large"
          sx={{
            color: '#BFCC94',
          }}
        />
      ) : (
        <Rating
          readOnly={true}
          size="large"
          sx={{
            color: '#BFCC94',
          }}
        />
      )}
    </FiveStarsRatingStyled>
  );
};

export { FiveStarsRating };
