import styled from 'styled-components';

const tablet = '@media(max-width: 834px)';
const mobileL = '@media(max-width: 425px)';

const CommentsStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 667px;
  width: 100%;
  margin-bottom: 108px;

  .comments__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #0d1821;
    margin-bottom: 50px;
  }

  .comments__item {
    margin-bottom: 10px;
  }

  .comments__form {
    margin-top: 60x;
  }

  ${tablet} {
    .comments__title {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 20px;
    }

    .comments__form {
      margin-top: 40px;
    }
  }

  ${mobileL} {
    .comments__title {
      display: none;
    }
  }
`;

export { CommentsStyled };
