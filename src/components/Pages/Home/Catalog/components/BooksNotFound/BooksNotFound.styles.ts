import styled from 'styled-components';

const BooksNotFoundStyled = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  gap: 25px;

  .books-not-found__image {
    max-width: 300px;
    width: 100%;
  }

  .books-not-found__text {
    font-size: 40px;
  }
`;

export { BooksNotFoundStyled };
