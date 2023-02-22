import styled from 'styled-components';

const tablet = '@media(max-width: 834px)';

const ProductItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, 30% 70%);
  grid-column-gap: 40px;
  grid-row-gap: 20px;

  .product__item_poster {
    grid-area: 1 / 1 / 3 / 2;
    max-width: 522px;
    width: 100%;
    max-height: 777px;
    height: auto;
    min-width: 391px;
    min-height: 584px;
    border-radius: ${(props) => props.theme.border_radius};
  }

  .product__item_header {
    grid-area: 1 / 2 / 2 / 3;
  }

  .product__item_info {
    grid-area: 2 / 2 / 3 / 3;
  }

  ${tablet} {
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 15px;
    grid-row-gap: 20px;
    margin-bottom: 20px;

    .product__item_poster {
      grid-area: 1 / 1 / 2 / 2;
      max-width: 391px;
      width: 100%;
      max-height: 584px;
      height: auto;
      min-width: 135px;
      min-height: 202px;
    }

    .product__item_header {
      grid-area: 1 / 2 / 2 / 3;
    }

    .product__item_info {
      grid-area: 2 / 1 / 3 / 3;
      max-width: none;
    }
  }
`;

export { ProductItemStyled };
