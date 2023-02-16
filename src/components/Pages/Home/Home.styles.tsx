import styled from 'styled-components';

const tablet = '@media(max-width: 834px)';

const HomeStyled = styled.div`
  .home__book_banner {
    margin-bottom: 110px;
  }

  .home__auth_banner {
    margin-bottom: 150px;
  }

  ${tablet} {
    .home__book_banner {
      margin-bottom: 60px;
    }
  }
`;

export { HomeStyled };
