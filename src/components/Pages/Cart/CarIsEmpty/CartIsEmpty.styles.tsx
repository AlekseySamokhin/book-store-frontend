import styled from 'styled-components';

const CartIsEmptyStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 78px 0 158px 0;

  .cart-is-empty__image {
    margin-right: 109px;
  }

  .cart-is-empty__text {
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  .cart-is-empty__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0d1821;
    padding-top: 25px;
    margin-bottom: 30px;
  }

  .cart-is-empty__description {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #344966;
    margin-bottom: 60px;
  }

  .cart-is-empty__button {
    max-width: 219px;
  }
`;

export { CartIsEmptyStyled };
