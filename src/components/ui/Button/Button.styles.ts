import styled from 'styled-components';

interface ITypesProps {
  disabled?: boolean;
  primary?: string;
  secondary?: string;
  outlined?: boolean;
}

const StyledButton = styled.button<ITypesProps>`
  display: block;
  white-space: nowrap;
  border: ${(props) => (props.outlined ? `1px solid ${props.theme.colors.dark}` : 'none')};
  border-radius: ${(props) => props.theme.border_radius};
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
`;

export default StyledButton;
