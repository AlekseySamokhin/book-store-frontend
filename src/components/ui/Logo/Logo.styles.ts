import styled from 'styled-components';

const mobileL = '@media(max-width: 435px)';

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

  ${mobileL} {
    .logo__link {
      width: 62px;
      height: 31px;
    }
  }
`;

export { LogoStyled };
