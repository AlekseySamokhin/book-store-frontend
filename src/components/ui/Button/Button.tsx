import StyledButton from './Button.styles';

interface ITypeProps {
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  outlined?: boolean;
  primary?: string;
  secondary?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ITypeProps> = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
      type={props.type}
      outlined={props.outlined}
      disabled={props.disabled}
      className={props.className}
    >
      {props.children}
    </StyledButton>
  );
};

export { Button };
