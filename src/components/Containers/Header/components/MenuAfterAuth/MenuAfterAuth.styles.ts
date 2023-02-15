import styled from 'styled-components';

const mobileM = '@media (max-width: 435px)';

interface ITypeProps {
  children: React.ReactNode;
  icon?: boolean;
}

const MenuAfterAuthStyled = styled.div<ITypeProps>`
  display: flex;
  justify-content: space-between;

  a:not(:last-child) {
    margin-right: 27px;
  }

  ${mobileM} {
    a:not(:last-child) {
      margin-right: 17px;
    }
  }
`;

export { MenuAfterAuthStyled };
