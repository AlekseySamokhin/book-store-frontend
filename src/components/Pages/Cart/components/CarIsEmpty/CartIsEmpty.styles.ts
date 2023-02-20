import styled from 'styled-components';

const tablet = '@media (max-width: 834px)';
const mobile = '@media (max-width: 320px)';

const CartIsEmptyStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 78px 0 158px 0;
  gap: 20px;

  .cart-is-empty__image {
    width: 50%;
    max-width: 433px;
    min-width: 250px;
    max-height: 261px;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }

  .cart-is-empty__text {
    display: flex;
    flex-direction: column;
    align-items: left;
    max-width: 465px;

    a {
      max-width: 219px;
      display: block;
    }
  }

  .cart-is-empty__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0d1821;
    margin-bottom: 20px;
  }

  .cart-is-empty__description {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #344966;
    margin-bottom: 60px;
  }

  .cart-is-empty__button {
    padding: 10px 0;
    width: 100%;
  }

  ${tablet} {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;

    .cart-is-empty__title {
      font-size: 32px;
      line-height: 48px;
    }

    .cart-is-empty__description {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 50px;
    }

    .cart-is-empty__text {
      a {
        max-width: none;
      }
    }
  }

  ${mobile} {
    .cart-is-empty__title {
      font-size: 18px;
      line-height: 27px;
      margin-bottom: 15px;
    }

    .cart-is-empty__description {
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 30px;
    }

    .cart-is-empty__button {
      font-size: 12px;
    }
  }
`;

export { CartIsEmptyStyled };
