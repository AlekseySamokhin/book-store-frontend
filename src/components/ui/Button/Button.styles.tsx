import styled from 'styled-components';

interface ITypesProps {
  disabled?: boolean;
  primary?: string;
  secondary?: string;
  outlined?: boolean;
}

const StyledButton = styled.button<ITypesProps>`
  display: block;
  padding: 14px 50px;
  border: ${(props) => (props.outlined ? `1px solid ${props.theme.colors.dark}` : 'none')};
  border-radius: 16px;
  color: ${(props) => (props.outlined ? props.theme.colors.dark : props.theme.colors.light)};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.75px;
  transition: 0.3s;
  cursor: pointer;

  background-color: ${(props) => (props.outlined ? 'white' : props.theme.colors.dark_blue)};
  transition: background-color 250ms linear;

  &:hover {
    background-color: ${(props) => (props.outlined ? 'none' : props.theme.colors.dark)};
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
