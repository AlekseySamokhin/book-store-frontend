import styled from 'styled-components';

const mobileL = '@media (max-width: 435px)';

const SearchStyled = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  background-color: #f0f4ef;
  border-radius: ${(props) => props.theme.border_radius};

  cursor: pointer;

  .search__input {
    background-color: #f0f4ef;
    line-height: 24px;
    letter-spacing: 0.75px;
    padding: 20px 40px 20px 64px;
    font-size: 16px;
    width: 100%;
    border-radius: ${(props) => props.theme.border_radius};

    ::-webkit-input-placeholder {
      color: ${(props) => props.theme.colors.dark_grey};
    }
  }

  .search__icon_clear {
    position: absolute;
    top: 26px;
    right: 20px;
  }

  .search__icon {
    position: absolute;
    display: block;
    top: 20px;
    left: 26px;
  }

  ${mobileL} {
    .search__input {
      padding: 11.5px 20px 11.5px 44px;
      font-size: 14px;
    }

    .search__icon {
      width: 18px;
      height: 18px;
      top: 15px;
      left: 18px;
    }

    .search__icon_clear {
      top: 17px;
    }
  }
`;

export { SearchStyled };
