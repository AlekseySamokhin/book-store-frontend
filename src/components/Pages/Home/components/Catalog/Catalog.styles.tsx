import styled from 'styled-components';

const CatalogStyled = styled.div`
  margin-bottom: 32px;

  .catalog__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

  .catalog__header_title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0d1821;
  }

  .catalog__header_select {
    display: flex;

    & div:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export { CatalogStyled };