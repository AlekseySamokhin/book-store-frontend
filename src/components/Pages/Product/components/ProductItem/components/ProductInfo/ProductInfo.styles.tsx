import styled from 'styled-components';

const ProductInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: #0d1821;

  .product__item_name {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }

  .product__item_author {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 21px;
  }

  .product__item_description {
    margin-bottom: 75px;
  }

  .product__item_buttons {
    display: flex;
  }

  .product__item_buttons_title {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #344966;
    display: block;
    margin-bottom: 14px;
  }

  .product__item_rating {
    display: flex;
    align-items: center;
    margin-bottom: 31px;
  }

  .product__item_button {
    margin-right: 82px;
  }

  .product__item_rating_star {
    margin-right: 41px;
  }
`;

export { ProductInfoStyled };
