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

    height: 100%;

    span {
      padding-left: 128px;
    }

    a {
       display: inherit;
    }
  }

  @media (max-width: 1100px) {
    padding: 20px 0 20px 0;
    margin-bottom: 5px;

    .header__link {
      span {
        padding-left: 100px;
      }
    }
  }

  @media (max-width: 970px) {
    .header__link {
      span {
        padding-left: 80px;
      }
    }
  }

  @media (max-width: 700px) {
    flex-wrap: wrap;

    .header__link {
      order: -2;
    }
  }

  @media (max-width: 850px) {
    .header__link {
      span {
        padding-left: 30px;
      }
    }
  }

  @media (max-width: 833px) {
    .header__link {
      span {
        /* padding-left: 180px; */
        font-size: 14px;
      }
    }
  }
`;

export default Header;
