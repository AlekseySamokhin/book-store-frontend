import styled from 'styled-components';

const CartStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 114px;

  .cart__total {
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    color: #0d1821;
    margin-bottom: 30px;

    span {
      font-weight: 700;
    }
  }

  .cart__buttons {
    display: flex;
  }

  button:not(:last-child) {
    margin-right: 20px;
  }
`;

export { CartStyled };
