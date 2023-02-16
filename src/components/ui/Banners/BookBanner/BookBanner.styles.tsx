import styled from 'styled-components';

import { images } from '@/assets';

const laptop = '@media (max-width: 1000px)';
const tabletL = '@media (max-width: 785px)';
const mobileL = '@media (max-width: 425px)';

const BookBannerStyled = styled.div`
  position: relative;
  background-color: #f0f4ef;
  border-radius: 16px;
  padding: 0px 40px 0px 14px;
  background-image: url(${images.bookBannerBooks});
  background-repeat: no-repeat;
  background-position: 0% 100%;
  background-size: 50%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .book-banner__button {
    padding: 14px 56px;
  }

  .book-banner__image {
    width: 100%;
    height: auto;
    max-width: 406px;
  }

  .book-banner__text {
    display: flex;
    flex-direction: column;
  }

  .book-banner__title {
    color: #0d1821;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin-bottom: 15px;
  }

  .book-banner__description {
    color: #344966;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 40px;
  }

  ${laptop} {
    background-size: 45%;
    justify-content: flex-start;
    padding-top: 45px;
    padding-bottom: 56px;
    background-position: 0% 100%;

    .book-banner__image {
      position: absolute;
      right: 3px;
      bottom: 1px;
      width: 100%;
      max-width: 368px;
    }

    .book-banner__title {
      line-height: 48px;
      font-size: 32px;
    }

    .book-banner__description {
      max-width: 217px;
      font-size: 16px;
    }
  }

  ${tabletL} {
    flex-direction: column;
    background-size: 40%;
    background-position: 67% 11%;
    padding-bottom: 0px;
    padding: 20px 18px 0px 18px;

    .book-banner__text {
      align-items: center;
    }

    .book-banner__description {
      text-align: center;
    }

    .book-banner__button {
      margin-bottom: 56px;
    }

    .book-banner__title {
      font-size: 28px;
      margin-bottom: 20px;
    }

    .book-banner__description {
      margin-bottom: 20px;
    }

    .book-banner__image {
      position: static;
    }
  }

  ${mobileL} {
    .book-banner__text {
      align-items: flex-start;
    }

    .book-banner__button {
      font-size: 12px; 
    }

    .book-banner__title {
      line-height: 27px;
      font-size: 18px;
    }

    .book-banner__description {
      text-align: start;
      font-size: 14px;
    }
  }
`;

export { BookBannerStyled };
