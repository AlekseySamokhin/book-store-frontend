import styled from 'styled-components';

const CommentsStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 667px;
  width: 100%;

  .comments__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #0d1821;
    margin-bottom: 50px;
  }

  .comment__item {
    margin-bottom: 10px;
  }
`;

export { CommentsStyled };
