import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 24px 0;
  margin-bottom: 16px;

  .header__link {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      padding-left: 128px;
    }
  }

  .header__search {
    position: relative;
    display: flex;
    max-width: 630px;
  }

  .input__image {
    position: absolute;
    top: 22px;
    left: 26px;
  }

  @media (max-width: 320px) {
    .input__image {
      top: 14px;
      left: 26px;
    }
  }
`;

export default Header;
