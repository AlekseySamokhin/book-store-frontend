/* eslint-disable no-console */
import { useState } from 'react';
import type { FieldInputProps } from 'formik';

import { CustomInputStyled } from './CustomInput.styles';

import { icons } from '../../assets';

interface ICustomInputPropsType {
  type: string;
  placeholder?: string;
  icon: string;
  alt?: string;
  error?: string;
  touched?: boolean;
  className?: string;
  fieldInputProps?: FieldInputProps<string>;
}

const CustomInput: React.FC<ICustomInputPropsType> = (props): JSX.Element => {
  const [type, setType] = useState<string>(props.type);
  const [icon, setIcon] = useState<string>(props.icon);

  const handleTogglePassword = () => {
    if (props.type !== 'password') return;

    if (type === 'password') {
      setType('text');
      setIcon(icons.view);
    }

    if (type === 'text') {
      setType('password');
      setIcon(props.icon);
    }
  };

  return (
    <CustomInputStyled className={props.className} touched={props.touched} error={props.error}>
      <img onClick={handleTogglePassword} src={icon} alt={props.alt} />
      <input
        type={type}
        placeholder={props.placeholder}
        {...props.fieldInputProps}
      />
    </CustomInputStyled>
  );
};

export default CustomInput;
