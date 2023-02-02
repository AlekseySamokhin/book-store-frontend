import styled from 'styled-components';

const CatalogStyled = styled.div`
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

  .catalog__booklist {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 83px;
  }

  .catalog__pagination {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .catalog__booklist_item {
    margin: 50px 0 30px 0;
  }
`;

export { CatalogStyled };
