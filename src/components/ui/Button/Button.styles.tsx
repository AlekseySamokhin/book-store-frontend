import styled from 'styled-components';

interface ITypesProps {
  disabled?: boolean;
  primary?: string;
  secondary?: string;
}

const StyledButton = styled.button<ITypesProps>`
  display: block;
  padding: 14px 50px;
  border: none;
  border-radius: 16px;
  color: #f0f4ef;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.75px;
  transition: 0.3s;
  cursor: pointer;

  background-color: ${(props) => (props.disabled ? props.theme.colors.dark_grey : props.theme.colors.dark_blue)};
  transition: background-color 250ms linear;

  &:hover {
    background-color: ${(props) => props.theme.colors.dark};
  }

  /* &:focus {
    border: 8px solid;
    border-color: ${(props) => props.theme.colors.light_grey};
  } */

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
