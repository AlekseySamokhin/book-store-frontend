import styled from 'styled-components';

const AuthBannerStyled = styled.div`
  background-color: #f0f4ef;
  border-radius: 16px;
  padding: 0 130px 0 108px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .auth-banner__image {
    margin-top: -62px;
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
