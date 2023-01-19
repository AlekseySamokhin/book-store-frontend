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
    border-radius: ${(props) => props.theme.borderRadius};
    margin-bottom: 30px;
  }

  .book-item__title {
    color: ${(props) => props.theme.colors.dark_blue};
    font-weight: 500;
    font-size: 20px;
  }

  .book-item__author {
    color: ${(props) => props.theme.colors.dark_grey};
    margin-bottom: 21px;
  }

  .book-item__rating {
    margin-bottom: 32px;
  }
`;

export { BookItemStyled };
