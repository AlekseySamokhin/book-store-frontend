import styled from 'styled-components';

const StarRatingStyled = styled.div`
  display: flex;
  align-items: center;

  .star__rating_icon {
    margin-right: 15px;
  }

  .star__rating_number {
    display: block;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #b9bac4;
  }
`;

export { StarRatingStyled };
