import styled from 'styled-components';

interface IButtonProps {
  disabled?: boolean;
}

const Button = styled.button<IButtonProps>`
  padding: 10px 50px;
  border: none;
  cursor: pointer;
  border-radius: 16px;
  font-weight: 600;
  font-size: 16px;
  color: #f0f4ef;
  display: block;
  transition: 0.3s;

  background: ${(props) => (props.disabled ? '#B9BAC4' : '#344966')};

  &:hover {
    background: #0d1821;
  }

  @media (max-width: 778px) {
    font-size: 14px;
    padding: 11px 17px;
  }

  @media (max-width: 680px) {
    order: -2;
  }

  @media (max-width: 400px) {
    font-size: 12px;
    padding: 11px 17px;
  }
`;

export default Button;
