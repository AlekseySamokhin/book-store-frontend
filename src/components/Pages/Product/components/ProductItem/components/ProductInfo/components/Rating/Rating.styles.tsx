import styled from 'styled-components';

const tablet = '@media(max-width: 834px)';

const RatingStyled = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${tablet} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
  }

  .product__item_rating_left_block {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export { RatingStyled };
