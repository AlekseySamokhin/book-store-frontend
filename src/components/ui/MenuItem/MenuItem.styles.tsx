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

  .menu-item__count {
    position: absolute;
    width: 23px;
    height: 23px;
    top: -6px;
    left: 33px;
    border-radius: 50px;
    background: #bfcc94;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: #344966;
  }
`;

export { MenuItemStyled };
