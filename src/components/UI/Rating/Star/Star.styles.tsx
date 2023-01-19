import styled from 'styled-components';

interface ITypesProps {
  image?: string;
}

const StarStyled = styled.img<ITypesProps>`
  cursor: pointer;
  display: block;
`;

export { StarStyled };
