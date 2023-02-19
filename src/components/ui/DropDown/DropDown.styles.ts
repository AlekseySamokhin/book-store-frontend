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
  display: flex;
  width: 100%;

  .select__block {
    display: flex;
    justify-content: space-between;
    max-width: 196px;
    width: 100%;
    padding: 13px 15px 13px 15px;
  }

  .select__title {
    overflow: hidden;
    white-space: nowrap;
    display: block;
  }

  .select__icon {
    display: block;
    margin-left: 7.5px;
    transform: ${(props) => (props.isOpen ? 'rotate(90deg)' : '')};
  }

  ${tabletL} {
    min-width: 165px;

    .select__block {
    max-width: none;
  }
  }

  ${tabletS} {
    max-width: none;
  }
`;

export { DropDownStyled };
