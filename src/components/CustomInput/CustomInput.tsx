/* eslint-disable no-console */
import React from 'react';
import type { FieldInputProps } from 'formik';

import CustomInputStyled from './CustomInput.styled';

interface IInputPropsType {
  type?: string;
  placeholder?: string;
  icon?: string;
  alt?: string;
  error: string;
  touched?: boolean;
  fieldInputProps?: FieldInputProps<string>;
}

const CustomInput: React.FC<IInputPropsType> = (props: IInputPropsType) => {
  return (
    <CustomInputStyled touched={props.touched} error={props.error}>
      <img src={props.icon} alt={props.alt} />
      <input
        type={props.type}
        placeholder={props.placeholder}
        {...props.fieldInputProps}
      />
    </CustomInputStyled>
  );
};

export default CustomInput;
