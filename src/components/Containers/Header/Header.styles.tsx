import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  padding: 24px 0 24px 0;

  .header__link {
    display: flex;
    align-items: center;
  }

  .header__search {
    max-width: 630px;
  }

  .header__logo {
    padding-right: 128px;
  }

  @media (max-width: 1240px) {
    .header__logo {
      padding-right: 80px;
    }
  }

  @media (max-width: 1150px) {
    .header__search {
      max-width: 500px;
    }

    .header__logo {
      padding-right: 60px;
    }
  }

  @media (max-width: 1000px) {
    .header__search {
      max-width: 400px;
    }

    .header__logo {
      padding-right: 60px;
    }
  }

  @media (max-width: 880px) {
    .header__search {
      max-width: 247px;
    }

    .header__logo {
      padding-right: 50px;
    }
  }

  @media (max-width: 690px) {
    .header__logo {
      padding-right: 17px;
    }
  }

  @media (max-width: 660px) {
    padding-top: 37px;
    flex-wrap: wrap;

    .header__search {
      order: 1;
      margin-top: 17px;
      max-width: initial;
    }

    .header__logo {
      padding-right: 100px;
    }
  }

  @media (max-width: 500px) {
    .header__logo {
      padding-right: 25px;
    }
  }

  @media (max-width: 410px) {
    .header__logo {
      padding-right: 17px;
    }
  }


  /* @media (max-width: 800px) {
    .header__search {
      order: 1;
    }

    .header__logo {
      padding-right: 30px;
    }
  } */
`;

export { HeaderStyled };
