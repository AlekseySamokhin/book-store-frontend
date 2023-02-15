import styled from 'styled-components';

const AuthBannerStyled = styled.div`
  background-color: #f0f4ef;
  border-radius: 16px;
  padding: 80px 130px 96px 108px;
  display: flex;
  justify-content: end;
  position: relative;

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

  .auth-banner__image-fairy {
    position: absolute;
    z-index: -10;
    right: 0;
    bottom: 0;
  }

  a:not(:last-child) {
    margin-right: 10px;
  }

  @media (max-width: 1200px) {
    .auth-banner__image {
      left: 50px;
    }
  }

  @media (max-width: 1100px) {
    padding: 80px 20px 96px 108px;

    .auth-banner__image {
      left: 5px;
    }
  }

  @media (max-width: 1060px) {
    .book-banner__image-background {
      bottom: -76px;
      left: -37px;
    }
  }

  @media (max-width: 1020px) {
    // padding: 60px 0 76px 40px;

    .auth-banner__title {
      font-size: 32px;
    }

    .auth-banner__description {
      font-size: 16px;
    }
  }

  @media (max-width: 874px) {
    // padding: 60px 0 76px 40px;

    .auth-banner__title {
      font-size: 32px;
    }

    .auth-banner__description {
      font-size: 16px;
    }
  }

  @media (max-width: 840px) {
    display: flex;
    flex-direction: column;
    padding: 20px 20px 0px 20px;

    .book-banner__image {
      position: static;
    }

    .book-banner__image-background {
      width: 232px;
      height: 140px;
      top: 36px;
      left: 140px;
    }
  }

  @media (max-width: 500px) {
    .book-banner__title {
      font-size: 18px;
      line-height: 27px;
    }

    .book-banner__description {
      line-height: 21px;
      font-size: 14px;
    }

    .book-banner__image {
      width: 253px;
      height: 282px;
    }

    .book-banner__image-background {
      left: 70px;
      top: 36px;
    }
  }

  @media (max-width: 410px) {
    .book-banner__image-background {
      left: 20px;
      top: 36px;
    }
  }


`;

export { AuthBannerStyled };
