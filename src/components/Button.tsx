import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 50px;
  background: #344966;
  border: none;
  cursor: pointer;
  border-radius: 16px;
  font-weight: 500;
  font-size: 16px;
  color: #f0f4ef;
  display: block;

  @media (max-width: 778px) {
    font-size: 14px;
    padding: 11px 17px;
  }

  @media (max-width: 680px) {
    order: -2;
  }

  @media (max-width: 320px) {
    font-size: 12px;
    padding: 11px 17px;
  }
`;

export default Button;
