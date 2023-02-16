import styled from 'styled-components';

const tabletL = '@media(max-width: 834px)';
const tabletS = '@media(max-width: 570px)';

interface ITypeProps {
  isOpen: boolean;
  onClick?: () => void;
}

const DropDownStyled = styled.div<ITypeProps>`
  background: #f0f4ef;
  border-radius: 16px;
  font-size: 18px;
  color: #344966;
  cursor: pointer;
  position: relative;
  min-width: 196px;
  width: 100%;

  .select__block {
    display: flex;
    justify-content: space-between;
    padding: 13px 15px 13px 15px;
  }

  .select__title {
    white-space: nowrap;
  }

  .select__icon {
    transform: ${(props) => (props.isOpen ? 'rotate(90deg)' : '')};
  }

  ${tabletL} {
    max-width: 255px;
    min-width: 165px;
  }

  ${tabletS} {
    width: 100%;
    max-width: none;
  }
`;

export { DropDownStyled };
