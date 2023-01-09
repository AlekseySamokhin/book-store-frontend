import type { ReactNode } from 'react';
import StyledButton from './Button.styled';

type IButtonPropsType = {
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  primary?: string;
  secondary?: boolean;
  className?: string;
  children?: ReactNode;
};

const Button: React.FC<IButtonPropsType> = (props) => {
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
