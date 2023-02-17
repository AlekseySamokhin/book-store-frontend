import styled from 'styled-components';

const tabletM = '@media(max-width: 600px)';
const tabletS = '@media(max-width: 500px)';
const mobile = '@media(max-width: 320px)';

interface ITypeProps {
  isNew: boolean;
  isBestseller: boolean;
}

const BookStatusStyled = styled.div<ITypeProps>`
  border-radius: ${(props) => props.theme.border_radius};
  color: ${(props) => (props.isNew ? `${props.theme.colors.dark_blue}` : `${props.theme.colors.light}`)};
  background-color: ${(props) => (props.isNew ? `${props.theme.colors.green}` : `${props.theme.colors.dark_blue}`)};

  font-size: 14px;
  padding: 10px 0;
  max-width: 130px;
  width: 100%;
  text-align: center;
  font-style: italic;

  ${tabletM} {
    max-width: 113px;
    
    .book-item__status {
      position: absolute;
      bottom: 10px;
      left: 19px; 
    }
  }

  ${tabletS} {
    max-width: 100px;
    
    .book-item__status {
      position: absolute;
      bottom: 10px;
      left: 19px; 
    }
  }

  ${mobile} {
    font-style: 10px;
  }
`;

export { BookStatusStyled };
