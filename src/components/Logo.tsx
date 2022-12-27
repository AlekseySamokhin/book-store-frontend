import styled from 'styled-components';

const Logo = styled.img`
  cursor: pointer;

  width: 88px;
  height: 46px;

  @media (max-width: 320px) {
    width: 46px;
    height: 31px;
  }
`;

export default Logo;
