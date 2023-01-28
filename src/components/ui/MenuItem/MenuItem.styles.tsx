import styled from 'styled-components';

interface ITypesProps {
  disabled?: boolean;
}

const MenuItemStyled = styled.div<ITypesProps>`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  position: relative;

  background: ${(props) => props.theme.colors.dark_blue};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};

  .menu-item__icon {
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export { MenuItemStyled };
