import React from 'react';
import type { FieldInputProps } from 'formik';

import InputStyled from './Input.styled';

interface IUnputProps {
  type?: string;
  placeholder?: string;
  icon?: string;
  alt?: string;
  name?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fieldInputProps?: FieldInputProps<any>;
}

const Input: React.FC<IUnputProps> = (props: IUnputProps) => {
  return (
    <InputStyled>
      <img src={props.icon} alt={props.alt} />
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        {...props.fieldInputProps}
      />
    </InputStyled>
  );
};

export default Input;
