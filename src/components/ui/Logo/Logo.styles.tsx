import styled from 'styled-components';

const LogoStyled = styled.div`
  .logo__image {
    max-width: 100%;
    height: auto; 

    cursor: pointer;
  }

  .logo__link {
    display: block;
    width: 88px;
    height: 46px;
  }

  @media (max-width: 430px) {
    .logo__link {
      width: 62px;
      height: 31px;
    }
  }
`;

export { LogoStyled };
