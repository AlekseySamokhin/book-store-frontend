import styled from 'styled-components';

const tablet = '@media (max-width: 834px)';
const laptop = '@media (max-width: 650px)';

const AuthStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 50px 0 80px 0;

  .auth__input {
    width: 100%;
    margin-bottom: 30px;
  }

  .auth__content {
    width: 100%;
    max-width: 413px;
    min-width: 250px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .auth__button {
    padding: 10px 50px;
    margin-top: 60px;
  }

  .auth__content_title {
    font-size: 40px;
    line-height: 60px;
    font-weight: 700;
    color: #0d1821;
    margin-bottom: 60px;
  }

  .auth__image {
    width: calc(60% / 1);
    display: block;
    max-width: 612px;
  }

  ${tablet} {
    .auth__content_title {
      font-size: 32px;
      line-height: 48px;
    }
  }

  ${laptop} {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 80px 0;
    gap: 60px;

    .auth__image {
      width: calc(75% / 1);
      display: block;
      max-width: 612px;
    }

    .auth__content_title {
      margin-bottom: 30px;
    }
  }
`;

export { AuthStyled };
