import StyledButton from './Button.styles';

interface ITypesProps {
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  primary?: string;
  secondary?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ITypesProps> = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
      className={props.className}
    >
      {props.children}
    </StyledButton>
  );
};

export { Button };