import styled from 'styled-components';

const PosterStyled = styled.img`
  display: block;
  max-width: 522px;
  width: 100%;
  max-height: 777px;
  height: 100%;
  min-width: 391px;
  min-height: 584px;
  border-radius: ${(props) => props.theme.border_radius};
`;

export { PosterStyled };
