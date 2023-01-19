import { useState } from 'react';

import { StarRatingStyled } from './StarRating.styles';
import { Star } from './Star';

interface ITypesProps {
  className: string;
}

const StarRating: React.FC<ITypesProps> = (props): JSX.Element => {
  const [selectedStars, setSelectedStars] = useState<number>(1);

  return (
    <StarRatingStyled className={props.className}>
      <div className="star-rating__list">
        {[...Array(5)].map((_, i) => (
          <Star
            className="star-rating__item"
            key={i}
            selected={selectedStars >= i + 1}
            onSelect={() => setSelectedStars(i + 1)}
          />
        ))}
      </div>
      <p className="start-rating__number">{selectedStars}.0</p>
    </StarRatingStyled>
  );
};

export { StarRating };
