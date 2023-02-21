import styled from 'styled-components';

const tablet = '@media(max-width: 834px)';

const RatingStyled = styled.div`
  max-width: 335px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  .product__item_rating_left_block {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  ${tablet} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
  }
`;

export { RatingStyled };
