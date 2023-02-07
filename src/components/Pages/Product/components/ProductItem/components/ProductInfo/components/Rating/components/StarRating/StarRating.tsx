import { Rating } from '@mui/material';

import { StarRatingStyled } from './StarRating.styles';

interface ITypeProps {
  className?: string;
  averageRating: number;
}

const StarRating: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <StarRatingStyled className={props.className}>
      <Rating
        className="star__rating_icon"
        value={props.averageRating / 5}
        precision={0.1}
        readOnly={true}
        size="large"
        max={1}
        sx={{
          color: '#BFCC94',
        }}
      />

      <span className="star__rating_number">
        {Number.isInteger(props.averageRating) && props.averageRating !== 0
          ? `${props.averageRating}.0`
          : props.averageRating}
      </span>
    </StarRatingStyled>
  );
};

export { StarRating };
