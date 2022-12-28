import styled from 'styled-components';

const Footer = styled.footer`
  background-color: #0d1821;
  font-size: 20px;
  color: #f0f4ef;
  padding: 73px 0;

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer__block {
    display: flex;
    flex-direction: column;
  }

  .footer__contacts {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    a:not(:last-child) {
      padding-bottom: 5px;
    }
  }

  .footer__nav {
    li:not(:last-child) {
      padding-bottom: 11px;
    }
  }

  .footer__location {
    display: flex;
    flex-direction: column;

    span {
      padding-bottom: 5px;
    }
  }

  @media (max-width: 1280px) {
    font-size: 16px;
  }

  @media (max-width: 800px) {
    padding-bottom: 30px;

    .footer {
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: baseline;
    }

    .footer__contacts {
      margin-bottom: 40px;
    }

    .footer__nav {
      margin-bottom: 40px;
    }

    .footer__location {
      img {
        width: 100%;
        margin-bottom: 0;
      }
    }
  }

  @media (max-width: 800px) {
    padding-bottom: 30px;

    .footer {
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: baseline;
    }

    .footer__contacts {
      margin-bottom: 40px;
    }

    .footer__nav {
      margin-bottom: 40px;
    }

    .footer__location {
      img {
        width: 100%;
        margin-bottom: 0;
      }
    }
  }
`;

export default Footer;
