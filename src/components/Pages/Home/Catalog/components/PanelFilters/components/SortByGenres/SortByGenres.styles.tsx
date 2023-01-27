import styled from 'styled-components';

const SortByGenresStyled = styled.div`
  position: absolute;
  top: 74px;
  left: 0;
  background-color: #f0f4ef;
  border-radius: 16px;
  width: 305px;
  padding: 15px 0 15px 15px;
  z-index: 1000;
  cursor: pointer;

  & ::after {
    content: '';
    position: absolute;
    left: 15px;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 17px solid transparent;
    border-right: 17px solid transparent;
    border-bottom: 17px solid #f0f4ef;
    clear: both;
  }
`;

export { SortByGenresStyled };
