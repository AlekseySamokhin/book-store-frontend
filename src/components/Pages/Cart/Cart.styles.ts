import styled from 'styled-components';

const tabletS = '@media (max-width: 480px)';

const CartStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 0 104px 0;

  .cart__list {
    margin-bottom: 40px;
  }

  .cart__total {
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    color: ${(props) => props.theme.colors.dark};
    margin-bottom: 30px;

    .cart__total_price {
      font-weight: 700;
    }
  }

  .cart__buttons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 462px;
    width: 100%;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.75px;
  }

  .cart__button {
    width: 100%;
    font-weight: 600;
    padding: 10px 50px;
  }

  ${tabletS} {
    .cart__buttons {
      gap: 20px;
    }

    .cart__buttons_link {
      width: 100%;
    }
  }
`;

export { CartStyled };
