import styled from 'styled-components';

interface ITypesProps {
  isNew: boolean;
  isBestseller: boolean;
}

const BookStatusStyled = styled.div<ITypesProps>`
  font-size: 14px;
  padding: 0 50px;
  font-style: italic;
  border-radius: ${(props) => props.theme.border_radius};
  color: ${(props) => (props.isNew ? `${props.theme.colors.dark_blue}` : `${props.theme.colors.light}`)};
  background-color: ${(props) => (props.isNew ? `${props.theme.colors.green}` : `${props.theme.colors.dark_blue}`)};
`;

export { BookStatusStyled };
