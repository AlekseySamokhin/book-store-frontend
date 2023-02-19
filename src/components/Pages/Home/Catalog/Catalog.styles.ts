import styled from 'styled-components';

const tablet = '@media(max-width: 834px)';

const CatalogStyled = styled.div`
  .catalog__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
    margin-bottom: 50px;
  }

  .catalog__header_title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: ${(props) => props.theme.colors.dark};
  }

  .catalog__booklist {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 60px 20px;
    margin-bottom: 83px;
  }

  .catalog__pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
  }

  ${tablet} {
    .catalog__header {
      align-items: flex-start;
      flex-direction: column;
    }

    .catalog__booklist {
      gap: 30px 20px;
    }
  }
`;

export { CatalogStyled };
