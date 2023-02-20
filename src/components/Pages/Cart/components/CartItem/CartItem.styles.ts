import styled from 'styled-components';

const tablet = '@media (max-width: 834px)';
const laptop = '@media (max-width: 600px)';

const CartItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.dark};

  .cart-item__content {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
  }

  .cart-item__image {
    max-width: 197px;
    width: 100%;
    height: auto;
    height: 289px;
    border-radius: 16px;
  }

  .cart-item__info {
    display: flex;
    flex-direction: column;
  }

  .cart-item__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }

  .cart-item__author {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 50px;
  }

  .cart-item__buttons {
    display: flex;
    margin-bottom: 50px;
  }

  .cart-item__counter {
    max-width: 118px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    color: #0d1821;
    margin-right: 60px;
  }

  .cart-item__button {
    cursor: pointer;
    width: 32px;
    height: 32px;
    background-color: #f0f4ef;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cart-item__delete {
    cursor: pointer;
  }

  .cart-item__price {
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    padding-bottom: 10px;
  }

  .cart-item__line {
    border: 1px solid #d6d8e7;
    margin-bottom: 40px;
  }

  ${tablet} {
    .cart-item__title {
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
      margin-bottom: 0;
    }

    .cart-item__author {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 50px;
    }

    .cart-item__image {
      display: block;
      width: 100%;
      max-width: 255px;
      max-height: 375px;
      height: 100%;
    }
  }

  ${laptop} {
    .cart-item__title {
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 14px;
    }

    .cart-item__author {
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 27px;
    }

    .cart-item__image {
      max-width: 135px;
    }

    .cart-item__price {
      font-size: 18px;
      line-height: 27px;
    }

    .cart-item__counter {
      margin-right: 27px;
    }
  }
`;

export { CartItemStyled };
