/* eslint-disable no-console */
import Rating from '@mui/material/Rating';

import { FiveStarsRatingStyled } from './FiveStarsRating.styles';
import { useAppSelector } from '@/redux/store';

interface ITypesProps {
  personalRating: number;
  bookId?: string;
  readOnly: boolean;
  className?: string;
  changeRate: (newRate: number) => void;
}

const FiveStarsRating: React.FC<ITypesProps> = (props): JSX.Element => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <FiveStarsRatingStyled className={props.className}>
      {user.email ? (
        <Rating
          onChange={(_, newRate) => props.changeRate(newRate || 0)}
          value={props.personalRating}
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
          value={0}
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
