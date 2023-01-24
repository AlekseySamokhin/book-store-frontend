import styled from 'styled-components';

const FilterPanelStyled = styled.div`
  display: flex;

  & div:not(:last-child) {
    margin-right: 20px;
  }
`;

export { FilterPanelStyled };
