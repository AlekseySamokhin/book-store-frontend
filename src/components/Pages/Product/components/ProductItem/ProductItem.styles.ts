import styled from 'styled-components';

const ProductItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  width: 100%;

  .product__item_poster {
    // grid-area: 1 / 1 / 3 / 2;
    grid-area: 1 / 1 / 2 / 2;
  }
`;

export { ProductItemStyled };
