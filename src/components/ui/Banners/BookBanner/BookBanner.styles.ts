import styled from 'styled-components';

import { images } from '@/assets';

const tablet = '@media (max-width: 834px)';
const mobile = '@media (max-width: 320px)';

const BookBannerStyled = styled.div`
  background-color: #f0f4ef;
  border-radius: ${(props) => props.theme.border_radius};
  background-image: url(${images.bookBannerBooks});
  background-repeat: no-repeat;
  height: 100%;
  background-position: 0% 100%;
  background-size: 50%;
  padding: 0 10px;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;

  .book-banner__button {
    padding: 14px 56px;
  }

  .book-banner__image {
    width: calc(100% / 3);
    height: auto;
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
    max-width: 217px;
    width: 100%;
    line-height: 30px;
    margin-bottom: 40px;
  }

  ${tablet} {
    background-size: 45%;
    justify-content: center;
    align-items: flex-start;
    background-position: 75% 10%;
    padding-top: 15px;
    gap: 66px;

    .book-banner__text {
      align-items: center;
      text-align: center;
    }

    .book-banner__image {
      width: calc(90% / 1.5);
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

  ${mobile} {
    justify-content: flex-start;
    padding-top: 20px;

    .book-banner__text {
      align-items: flex-start;
      text-align: start;
      justify-content: start;
    }

    .book-banner__image {
      width: calc(100% / 1);
    }

    .book-banner__button {
      font-size: 12px;
    }

    .book-banner__title {
      line-height: 27px;
      font-size: 18px;
      margin-bottom: 20px;
    }

    .book-banner__description {
      font-size: 14px;
      line-height: 21px;
      margin-bottom: 20px;
    }
  }
`;

export { BookBannerStyled };
