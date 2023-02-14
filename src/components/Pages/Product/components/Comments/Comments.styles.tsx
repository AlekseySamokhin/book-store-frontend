import styled from 'styled-components';

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
    margin-top: 50px;
  }
`;

export { CommentsStyled };
