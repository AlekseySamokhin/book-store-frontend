import styled from 'styled-components';

const tablet = '@media(max-width: 834px)';

const ProductInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 630px;
  width: 100%;

  .product__item_name {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }

  .product__item_author {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 33px;
  }

  .product__item_rating {
    margin-bottom: 31px;
  }

  .product__item_description {
    margin-bottom: 75px;
  }

  .product__item_buttons {
    width: 80%;
    flex-direction: row;
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }

  .product__item_buttons_title {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #344966;
    display: block;
    margin-bottom: 14px;
  }

  .product__item_button {
    padding: 10px 50px;
  }

  .default {
    border: 1px solid transparent;
  }

  .outlined {
    border: 1px solid black;
  }

  ${tablet} {
    .product__item_name {
      font-size: 32px;
      line-height: 48px;
    }
  }
`;

export { ProductInfoStyled };
