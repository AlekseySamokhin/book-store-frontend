import styled from 'styled-components';

interface ITypesProps {
  isOpen: boolean;
  onClick: () => void;
}

const CustomSelectStyled = styled.div<ITypesProps>`
  background: #f0f4ef;
  border-radius: 16px;
  font-size: 18px;
  padding: 13px 15px;
  color: #344966;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  .custom-select__title {
    margin-right: 100px;
  }

  .custom-select__icons {
    transform: ${(props) => (props.isOpen ? 'rotate(90deg)' : '')};
  }
`;

export { CustomSelectStyled };
