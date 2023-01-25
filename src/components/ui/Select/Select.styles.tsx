import styled from 'styled-components';

interface ITypesProps {
  isOpen: boolean;
  onClick?: () => void;
}

const SelectStyled = styled.div<ITypesProps>`
  background: #f0f4ef;
  border-radius: 16px;
  font-size: 18px;
  padding: 13px 15px;
  color: #344966;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  position: relative;

  .select__title {
    padding-right: 100px;
  }

  .select__icon {
    transform: ${(props) => (props.isOpen ? 'rotate(90deg)' : '')};
  }
`;

export { SelectStyled };
