import styled from 'styled-components';

const mobileL = '@media (max-width: 435px)';

interface ITypeProps {
  children?: React.ReactNode;
}

const MenuBeforeAuthStyled = styled.div<ITypeProps>`
  display: flex;

  .menu-before-auth__button {
    padding: 14px 17.5px;
  }

  a:not(:last-child) {
    margin-right: 10px;
  }

  ${mobileL} {
    .menu-before-auth__button {
      font-size: 12px;
      padding: 10px 12.5px;
    }

    a:not(:last-child) {
      margin-right: 5px;
    }
  }
`;

export { MenuBeforeAuthStyled };
