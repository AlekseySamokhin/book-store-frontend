import styled from 'styled-components';

const SearchStyled = styled.div`
  cursor: pointer;
  display: flex;
  max-width: 630px;
  width: 100%;
  background-color: #f0f4ef;
  border-radius: 16px;
  position: relative;

  .search__icon {
    position: absolute;
    top: 22px;
    left: 26px;
    display: block;
  }

  .search__input {
    background-color: #f0f4ef;
    line-height: 24px;
    padding: 20px 20px 20px 64px;
    font-size: 16px;
    border-radius: 16px;
  }

  .search__icon_clear {
    position: absolute;
    top: 26px;
    right: 20px;
  }
`;

export { SearchStyled };
