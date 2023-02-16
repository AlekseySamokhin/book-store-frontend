import styled from 'styled-components';

const tablet = '@media(max-width: 834px)';

const CatalogStyled = styled.div`
  .catalog__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    gap: 10px;
    flex-wrap: wrap;
  }

  .catalog__header_title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0d1821;
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

  ${tablet} {

  }
`;

export { CatalogStyled };
