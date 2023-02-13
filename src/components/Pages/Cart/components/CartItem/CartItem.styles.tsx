import styled from 'styled-components';

const CartItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: #0d1821;

  .cart-item__content {
    display: flex;
    margin-bottom: 40px;
  }

  .cart-item__image {
    width: 197px;
    height: 289px;
    border-radius: 16px;
    margin-right: 20px;
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

  .cart-item_line {
    border: 1px solid #d6d8e7;
    margin-bottom: 40px;
  }
`;

export { CartItemStyled };
