import styled from 'styled-components';

const BookItemStyled = styled.div`
  max-width: 305px;
  display: flex;
  flex-direction: column;
  line-height: 30px;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;

  .book-item__poster {
    width: 305px;
    height: 448px;
    position: relative;
  }

  .book-item__image {
    border-radius: 16px;
    width: 100%;
    height: 100%;
  }

  .book-item__title {
    color: ${(props) => props.theme.colors.dark_blue};
    font-weight: 500;
    max-width: 305px;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 30px;
  }

  .book-item__author {
    color: ${(props) => props.theme.colors.dark_grey};
    margin-bottom: 21px;
  }

  .book-item__status {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }

  .book-item__like {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .book-item__rating {
    margin-bottom: 32px;
  }
`;

export { BookItemStyled };
