import styled from 'styled-components';

const AddCommentStyled = styled.form`
  display: flex;
  flex-direction: column;
  
  .add-comment__textarea {
    border: none;
    background: #f0f4ef;
    border-radius: 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: #344966;
    margin-bottom: 30px;
    resize: none;
    padding: 20px 24px 80px 24px;
  }

  .add-comment__textarea::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: #b9bac4;
  }

  .add-comment__button {
    max-width: 279px;
    width: 100%;
  }
`;

export { AddCommentStyled };
