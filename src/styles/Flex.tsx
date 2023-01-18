import styled from 'styled-components';

interface IFlexStyledProps {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
  children?: JSX.Element | JSX.Element[];
  className?: string;
  zIndex?: string;
}

const StyledFlex = styled.div<IFlexStyledProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'stretch'};
  margin: ${(props) => props.margin || '0'};
  z-index: ${(props) => props.zIndex || ''};
`;

const Flex: React.FC<IFlexStyledProps> = (props: IFlexStyledProps) => {
  return <StyledFlex {...props} />;
};

export { Flex };
