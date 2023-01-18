import styled from 'styled-components';

interface IButtonProps {
  disabled?: boolean;
  primary?: string;
  secondary?: string;
}

const StyledButton = styled.button<IButtonProps>`
  border: none;
  padding: 14px 50px;
  cursor: pointer;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;

  color: #f0f4ef;
  display: block;
  transition: 0.3s;

  background-color: ${(props) => (props.disabled ? '#B9BAC4' : '#344966')};
  transition: background-color 250ms linear;

  &:hover {
    background-color: #0d1821;
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

export default StyledButton;
