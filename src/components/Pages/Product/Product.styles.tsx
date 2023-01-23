import styled from 'styled-components';

const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;

  .product__item {
    display: flex;
    padding-bottom: 50px;
  }

  .product__item_poster {
    max-width: 522px;
    width: 100%;
    height: 777px;
    margin-right: 128px;
  }

  .product__item_info {
    display: flex;
    flex-direction: column;
    color: #0d1821;
  }

  .product__item_title {
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
    margin-top: 30px;
  }

  .product__item_description_title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin: 10px 0 22px 0;
  }

  .product__item_description_text {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #344966;
    margin-bottom: 74px;
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
    flex-direction: column;
    // align-items: center;
  }

  .product__item_rating_count {
    display: flex;
    align-items: center;
    margin-bottom: 17px;
  }

  .product__item_rating_star {
    margin-right: 11px;
  }

  .product__item_rating_number {
    display: flex;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #b9bac4;
  }

  .product__item_rating_stars {
    display: flex;
  }

  .product__item_button {
    margin-right: 82px;
  }

  .product__item_rating_stars_arrow {
    display: flex;
  }

  .product__item_rating_stars_arrow_icon {
    display: block;
    margin-right: 13px;
  }

  .product__item_rating_stars_arrow_text {
    font-weight: 500;
    font-size: 16px;
    color: #b9bac4;
  }
`;

export { ProductStyled };
