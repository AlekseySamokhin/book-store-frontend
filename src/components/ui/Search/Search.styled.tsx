import styled from 'styled-components';

const SearchStyled = styled.div`
  cursor: pointer;
  display: flex;
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
    letter-spacing: 0.75px;
    padding: 20px 20px 20px 64px;
    font-size: 16px;
    border-radius: 16px;
  }

  .search__icon_clear {
    position: absolute;
    top: 26px;
    right: 20px;
  }

  @media (max-width: 880px) {
    .search__input {
      max-width: 247px;
    }
  }

  @media (max-width: 430px) {
    .search__input {
      padding: 11.5px 20px 11.5px 64px;
    }

    .search__icon {
      top: 13px;
    }

    .search__icon_clear {
      top: 17px;
    }
  }
`;

export { SearchStyled };
