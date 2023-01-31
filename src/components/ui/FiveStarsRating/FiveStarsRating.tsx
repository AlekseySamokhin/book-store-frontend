import Rating from '@mui/material/Rating';

import { FiveStarsRatingStyled } from './FiveStarsRating.styles';

interface ITypesProps {
  value: number;
  readOnly: boolean;
}

const FiveStarsRating: React.FC<ITypesProps> = (props): JSX.Element => {
  return (
    <FiveStarsRatingStyled>
      <Rating
        name="half-rating"
        defaultValue={props.value}
        precision={0.1}
        readOnly={props.readOnly}
        size="large"
        sx={{
          color: '#BFCC94',
          '& .MuiRating-decimal': {
            paddingTop: '5px',
          },
          '& .MuiRating-decimal:not(:last-child)': {
            marginRight: '25px',
          },
        }}
      />
    </FiveStarsRatingStyled>
  );
};

export { FiveStarsRating };
