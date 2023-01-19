import styled from 'styled-components';

const StarRatingStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  .star-rating__list {
    display: flex;
  }

  .star-rating__item:not(:last-child) {
    margin-right: 32px;
  }

  .start-rating__number {
    font-weight: 500;
    font-size: 16px;
    color: #b9bac4;
  }
`;

export { StarRatingStyled };
