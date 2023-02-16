import styled from 'styled-components';

const tabletL = '@media(max-width: 834px)';
const tabletS = '@media(max-width: 570px)';

const PanelFiltersStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  ${tabletL} {
    width: 100%;
  }

  ${tabletS} {
    flex-direction: column;
  }
`;

export { PanelFiltersStyled };
