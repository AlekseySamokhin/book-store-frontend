import styled from 'styled-components';

const tabletL = '@media (max-width: 850px)';

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
    gap: 15px;
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
    max-width: 413px;
  }

  ${tabletL} {
    font-size: 16px;
    padding-bottom: 30px;

    .footer {
      display: flex;
      flex-direction: column;
      align-items: initial;
      justify-content: flex-start;
    }

    .footer__contacts {
      margin-bottom: 40px;
    }

    .footer__nav {
      margin-bottom: 40px;
    }
  }
`;

export { FooterStyled };
