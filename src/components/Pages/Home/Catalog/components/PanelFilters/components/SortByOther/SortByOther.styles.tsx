import styled from 'styled-components';

const SortByOtherStyled = styled.div`
  position: absolute;
  top: 74px;
  left: 0;
  background-color: #f0f4ef;
  border-radius: 16px;
  width: 197px;
  padding: 16px 0px 16px 15px;
  z-index: 1000;
  cursor: pointer;

  & ::after {
    content: '';
    position: absolute;
    left: 15px;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 17px solid transparent;
    border-right: 17px solid transparent;
    border-bottom: 17px solid #f0f4ef;
    clear: both;
  }

  .sort-by-other__list {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.75px;
    cursor: pointer;
  }

  .sort-by-other__list_item {
   color: ${(props) => props.theme.colors.dark_grey};
  }

  .sort-by-other__list_item--active {
   color: ${(props) => props.theme.colors.dark_blue};
  }

  .sort-by-other__list_item:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export { SortByOtherStyled };
