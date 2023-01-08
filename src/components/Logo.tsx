import styled from 'styled-components';

const Logo = styled.img`
  width: 88px;
  height: 46px;

  cursor: pointer;

  @media (max-width: 400px) {
    width: 46px;
    height: 31px;
  }
`;

export { Logo };
