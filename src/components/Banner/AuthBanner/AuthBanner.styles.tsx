import styled from 'styled-components';

const AuthBannerStyled = styled.div`
  background-color: #f0f4ef;
  border-radius: 16px;
  padding: 80px 130px 96px 108px;
  display: flex;
  justify-content: end;
  position: relative;
  margin-top: 35px;
  margin-bottom: 150px;

  .auth-banner__image {
    position: absolute;
    bottom: 0;
    left: 108px;
  }

  .auth-banner__block {
    z-index: 100;
    color: #0d1821;
  }

  .auth-banner__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin-bottom: 10px;
  }

  .auth-banner__description {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 60px;
  }

  .auth-banner__button-wrapper {
    display: flex;
  }

  .auth-banner__image-fairy {
    position: absolute;
    z-index: -10;
    right: 0;
    bottom: 0;
  }

  a:not(:last-child) {
    margin-right: 10px;
  }
`;

export { AuthBannerStyled };
