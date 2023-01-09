import styled from 'styled-components';

interface IPropsType {
  children: React.ReactNode;
  icon?: boolean;
}

const AuthStyled = styled.div<IPropsType>`
  display: flex;
  justify-content: space-between;

  div {
    width: 48px;
    height: 48px;
    background-color: #344966;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a:not(:last-child) {
    margin-right: 27px;
  }
`;

export { AuthStyled };
