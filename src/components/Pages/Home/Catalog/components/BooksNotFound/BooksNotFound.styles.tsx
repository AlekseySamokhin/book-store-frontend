import styled from 'styled-components';

const BooksNotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 200px 0;

  .books-not-found__title {
   font-size: 40px;
   padding-bottom: 20px;
  }

  .books-not-found__message {
   font-size: 22px;
   letter-spacing: 1px;
  }
 `;

export { BooksNotFoundStyled };
