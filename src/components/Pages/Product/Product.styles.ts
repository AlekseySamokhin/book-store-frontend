import styled from 'styled-components';

const tablet = '@media(max-width: 834px';

const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0 100px 0;

  .product__item {
    margin-bottom: 88px;
  }

  .product__comments {
    margin-bottom: 68px;
  }

  ${tablet} {
   padding-top: 8px;
  }
`;

export { ProductStyled };
