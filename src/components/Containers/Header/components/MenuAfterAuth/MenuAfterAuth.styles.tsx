import styled from 'styled-components';

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

  @media (max-width: 430px) {
    a:not(:last-child) {
    margin-right: 17px;
  }
  }
`;

export { MenuAfterAuthStyled };
