import styled from 'styled-components';

const BookBannerStyled = styled.div`
  position: relative;
  background-color: #f0f4ef;
  border-radius: 16px;
  padding: 80px 0 96px 108px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .book-banner__button {
    padding: 14px 56px;
  }

  .book-banner__title {
    color: #0d1821;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin-bottom: 10px;
  }

  .book-banner__description {
    color: #344966;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 50px;
  }

  .book-banner__image {
    position: absolute;
    bottom: 0;
    z-index: 10;
    right: 98px;
  }

  .book-banner__image-background {
    position: absolute;
    bottom: -96px;
    left: -107px;
    z-index: -10;
  }

  @media (max-width: 1100px) {
    .book-banner__image {
      right: 3px;
    }
  }

  @media (max-width: 1060px) {
    padding: 60px 0 76px 108px;

    .book-banner__image-background {
      bottom: -76px;
      left: -37px;
    }
  }

  @media (max-width: 1020px) {
    padding: 60px 0 76px 40px;

    .book-banner__title {
      font-size: 32px;
    }

    .book-banner__description {
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

export { BookBannerStyled };
