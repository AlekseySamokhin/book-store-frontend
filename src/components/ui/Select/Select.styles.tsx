import styled from 'styled-components';

interface ITypesProps {
  isOpen: boolean;
  onClick?: () => void;
}

const SelectStyled = styled.div<ITypesProps>`
  background: #f0f4ef;
  border-radius: 16px;
  font-size: 18px;
  color: #344966;
  cursor: pointer;
  position: relative;
  margin-right: 20px;
  width: 196px;

  .select__block {
    display: flex;
    justify-content: space-between;
    padding: 13px 15px 13px 15px;
  }

  .select__icon {
    transform: ${(props) => (props.isOpen ? 'rotate(90deg)' : '')};
  }
`;

export { SelectStyled };
