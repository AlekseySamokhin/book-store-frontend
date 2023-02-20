import styled from 'styled-components';

interface ITypeProps {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
  children?: JSX.Element | JSX.Element[];
  className?: string;
  zIndex?: string;
  position?: string;
}

const StyledFlex = styled.div<ITypeProps>`
  display: flex;
  position: ${(props) => props.position || 'static'};
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'stretch'};
  margin: ${(props) => props.margin || '0'};
  z-index: ${(props) => props.zIndex || ''};
`;

const FlexStyled: React.FC<ITypeProps> = (props) => {
  return <StyledFlex {...props} />;
};

export { FlexStyled };
