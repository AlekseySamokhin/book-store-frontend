import styled from 'styled-components';

const tabletM = '@media(max-width: 758px)';

const RateThisBookStyled = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 374px;

  .rating_this_book_arrow {
    width: 24px;
    height: 24px;
  }

  .rating_this_book_text {
    line-height: 24px;
    color: #b9bac4;
  }

  ${tabletM} {
   .rating_this_book_arrow {
      opacity: 0;
   }
  }
`;

export { RateThisBookStyled };
