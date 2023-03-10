import styled from 'styled-components';

interface ITypeProps {
  pages: {
    pagesQty: number;
    currentPage: number;
    prevPage: number;
    nextPage: number;
  };
}

const PaginationStyled = styled.div<ITypeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  .pagination__block {
    display: flex;
    justify-content: space-between;
    max-width: 237px;
    width: 100%;
  }

  .pagination__arrow {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  .arrow {
    position: relative;
    border: solid #0d1821;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
  }

  .right {
    display: ${(props) => (props.pages.currentPage === props.pages.pagesQty ? 'none' : 'inline-block')};
    left: 15px;
    bottom: -5px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  .left {
    display: ${(props) => (props.pages.currentPage === 1 ? 'none' : 'inline-block')};
    top: 5px;
    left: 5px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }

  .pagination__pages {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pagination__pages_item {
    cursor: pointer;
    width: 14px;
    height: 14px;
    border-radius: 50px;
    background: none;
    border: 2px solid #0d1821;
  }

  .pagination__pages_item--active {
    background: #0d1821;
    border: none;
  }

  .pagination__pages_item:not(:last-child) {
    margin-right: 37px;
  }
`;

export { PaginationStyled };
