import styled from 'styled-components';

const tablet = '@media(max-width: 834px)';
const tabletS = '@media(max-width: 768px)';

const ProductHeaderStyled = styled.div`
  .product__item_name {
    max-width: 600px;
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
    max-width: 504px;
    margin-bottom: 31px;
  }

  ${tablet} {
    .product__item_name {
      font-size: 32px;
      line-height: 48px;
    }

    .product__item_author {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 21px;
    }

    .product__item_rating {
      margin-bottom: 0px;
    }
  }

  ${tabletS} {
    .product__item_name {
      font-size: 24px;
      line-height: 36px;
    }

    .product__item_author {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 15px;
    }
  }
`;

export { ProductHeaderStyled };
