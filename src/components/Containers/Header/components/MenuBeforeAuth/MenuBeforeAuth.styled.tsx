import styled from 'styled-components';

interface IStyledPropsType {
  children?: React.ReactNode;
}

const MenuBeforeAuthStyled = styled.div<IStyledPropsType>`
  display: flex;

  a:not(:last-child) {
    margin-right: 10px;
  }

  @media (max-width: 1300px) {
    .menu-before-auth__button {
      padding: 14px 35px;
    }
  }

  @media (max-width: 1200px) {
    .menu-before-auth__button {
      padding: 14px 27.5px;
    }
  }

  @media (max-width: 750px) {
    .menu-before-auth__button {
      padding: 14px 27.5px;
    }
  }

  @media (max-width: 730px) {
    .menu-before-auth__button {
      padding: 14px 20px;
      font-size: 14px;
    }
  }

  @media (max-width: 385px) {
    .menu-before-auth__button {
      padding: 10px 14px;
      font-size: 10px;
    }

    a:not(:last-child) {
    margin-right: 5px;
  }
  }
`;

export { MenuBeforeAuthStyled };
