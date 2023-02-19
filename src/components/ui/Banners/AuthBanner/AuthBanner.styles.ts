import styled from 'styled-components';

import { images } from '@/assets';

const tablet = '@media (max-width: 834px)';
const mobile = '@media (max-width: 320px)';

const AuthBannerStyled = styled.div`
  background-color: #f0f4ef;
  border-radius: ${(props) => props.theme.border_radius};
  color: ${(props) => props.theme.colors.dark};

  background-image: url(${images.authBannerFairy});
  background-repeat: no-repeat;
  background-size: 45%;
  background-position: 100% 5%;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;

  .auth-banner__image {
    width: calc(100% / 2.2);
  }

  .auth-banner__block {
    display: flex;
    flex-direction: column;
    max-width: 415px;
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

  .auth-banner__buttons {
    display: flex;
  }

  .auth-banner__button {
    display: inline-block;
    line-height: 24px;
    padding: 10px 40px;
  }

  a:not(:last-child) {
    margin-right: 10px;
  }

  ${tablet} {
    background-size: 45%;
    justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
    background-position: 100% 10%;
    padding-top: 20px;
    gap: 78px;

    .auth-banner__text {
      align-items: center;
      text-align: center;
    }

    .auth-banner__image {
      width: calc(90% / 1.25);
    }

    .auth-banner__title {
      line-height: 48px;
      font-size: 32px;
    }

    .auth-banner__description {
      width: 100%;
      max-width: 250px;
      font-size: 16px;
      line-height: 24px;
    }
  }

  ${mobile} {
    .auth-banner__title {
      line-height: 27px;
      font-size: 18px;
      margin-bottom: 20px;
    }

    .auth-banner__description {
      max-width: 249px;
      font-size: 14px;
      line-height: 21px;
      margin-bottom: 20px;
    }

    .auth-banner__button {
      padding: 10px 25px;
    }
  }
`;

export { AuthBannerStyled };
