import styled from 'styled-components';

interface IFlexStyledProps {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
  children?: JSX.Element | JSX.Element[];
}

const StyledFlex = styled.div<IFlexStyledProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'stretch'};
  margin: ${(props) => props.margin || '0'};
`;

const Flex: React.FC<IFlexStyledProps> = (props: IFlexStyledProps) => {
  return <StyledFlex {...props} />;
};

export { Flex };
