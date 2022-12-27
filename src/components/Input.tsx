import styled from 'styled-components';

const Input = styled.input`
  background: #f0f4ef;
  border-radius: 16px;
  font-size: 16px;
  height: 64px;
  padding: 24px 0 24px 64px;
  color: #000000;
  max-width: 630px;
  width: 100%;

  @media (max-width: 320px) {
    padding: 15px 0 15px 64px;
  }
`;

export default Input;
