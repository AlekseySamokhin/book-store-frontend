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
    margin-bottom: 10px;
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

    width: 48px;
    height: 48px;
    border-radius: 50px;
    background: ${(props) => props.theme.colors.dark_blue};
  }

  .book-item__like_icon {
    position: relative;
    top: 14px;
    left: 11px;
  }

  .book-item__button {
    width: 100%;
  }

  .book__item__link {
    display: block;
  }

  .book-item__rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .book-item__rating_number {
    display: block;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #b9bac4;
  }
`;

export { BookItemStyled };
