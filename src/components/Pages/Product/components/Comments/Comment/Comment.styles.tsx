import styled from 'styled-components';

const CommentStyled = styled.div`
  background: #f0f4ef;
  border-radius: 16px;
  padding: 20px 92px 20px 20px;
  display: flex;
  // flex-direction: column;

  .comment__avatar {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    margin-right: 20px;
  }

  .comment__avatar_image {
    width: 60px;
    height: 60px;
    border-radius: 50px;
  }

  .commnet__content {
    display: flex;
    flex-direction: column;
  }

  .comment__content_author {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0d1821;
    margin-bottom: 4px;
  }

  .comment__content_date {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.75px;
    color: #b9bac4;
    margin-bottom: 20px;
  }
`;

export { CommentStyled };
