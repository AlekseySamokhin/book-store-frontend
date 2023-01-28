import styled from 'styled-components';

interface IStyledPropsType {
  children?: React.ReactNode;
}

const MenuBeforeAuthStyled = styled.div<IStyledPropsType>`
  display: flex;

  a:not(:last-child) {
    margin-right: 10px;
  }
`;

export { MenuBeforeAuthStyled };
