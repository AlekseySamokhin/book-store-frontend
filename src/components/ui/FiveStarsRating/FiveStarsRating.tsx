import { useState } from 'react';
import Rating from '@mui/material/Rating';

import { FiveStarsRatingStyled } from './FiveStarsRating.styles';
import { useAppSelector } from '@/redux/store';

interface ITypesProps {
  value: number;
  bookId?: string;
  readOnly: boolean;
  className?: string;
}

const FiveStarsRating: React.FC<ITypesProps> = (props): JSX.Element => {
  const email = useAppSelector((state) => state.auth.user.email);
  const [rate, setRate] = useState<number>(0);

  const handleChangeRate = (newRate: number) => {
    setRate(newRate);
  };

  return (
    <FiveStarsRatingStyled className={props.className}>
      <Rating
        onChange={(_, value) => handleChangeRate(value || 0)}
        value={rate}
        precision={0.5}
        readOnly={!!email ? true : false}
        size="large"
        sx={{
          color: '#BFCC94',
        }}
      />
    </FiveStarsRatingStyled>
  );
};

export { FiveStarsRating };
