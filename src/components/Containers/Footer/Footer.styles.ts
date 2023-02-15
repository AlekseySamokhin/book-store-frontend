import styled from 'styled-components';

const tabletL = '@media (max-width: 850px)';
const mobileL = '@media (max-width: 425px)';

const FooterStyled = styled.footer`
  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.light};
  font-size: 20px;
  padding: 73px 0;
  margin-top: auto;

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .footer__logo {
    margin-bottom: 30px;
  }

  .footer__contacts {
    display: flex;
    flex-direction: column;

    a:not(:last-child) {
      padding-bottom: 5px;
    }
  }

  .footer__nav_item {
    white-space: nowrap;
    cursor: pointer;
  }

  .footer__nav_item:not(:last-child) {
    padding-bottom: 11px;
  }

  .footer__location {
    display: flex;
    flex-direction: column;

    span {
      padding-bottom: 5px;
    }
  }

  .footer__location_map {
    width: 100%;
    max-width: 413px;
  }

  ${tabletL} {
    font-size: 16px;
    padding-bottom: 30px;

    .footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .footer__logo {
      margin: 0 auto 25px auto;
    }

    .footer__contacts {
      align-items: center;
    }

    .footer__contacts {
      margin-bottom: 40px;
    }

    .footer__nav {
      text-align: center;
      margin-bottom: 40px;
    }

    .footer__location {
      align-items: center;
    }
  }

  ${mobileL} {
    .footer {
      align-items: flex-start;
    }

    .footer__contacts {
      align-items: flex-start;
    }

    .footer__logo {
      margin: 0 0 25px 0;
    }

    .footer__nav {
      text-align: start;
    }

    .footer__location {
      align-items: flex-start;
    }
  }
`;

export { FooterStyled };
