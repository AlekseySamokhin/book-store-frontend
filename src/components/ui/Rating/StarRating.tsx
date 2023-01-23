import { useState } from 'react';

import { Star } from './Star';

import { StarRatingStyled } from './StarRating.styles';

interface ITypesProps {
  // id: string;
  rate: number;
  className?: string;
}

const StarRating: React.FC<ITypesProps> = (props): JSX.Element => {
  const [selectedStars, setSelectedStars] = useState<number>(props.rate);

  return (
    <StarRatingStyled className={props.className}>
      <div className="star-rating__list">
        {[...Array(5)].map((_, index) => (
          <Star
            className="star-rating__item"
            key={index}
            selected={selectedStars >= index + 1}
            onSelect={() => setSelectedStars(index + 1)}
          />
        ))}
      </div>

      <p className="start-rating__number">{selectedStars}.0</p>
    </StarRatingStyled>
  );
};

export { StarRating };
