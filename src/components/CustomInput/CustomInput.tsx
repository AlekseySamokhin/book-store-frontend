/* eslint-disable no-console */
import { useState } from 'react';
import type { FieldInputProps } from 'formik';

import { CustomInputStyled } from './CustomInput.styles';

import { icons } from '../../assets';

interface ICustomInputPropsType {
  autocomplete?: string;
  type: string;
  placeholder?: string;
  icon: string;
  alt?: string;
  error?: string;
  value: string;
  disabled?: boolean;
  touched?: boolean;
  className?: string;
  fieldInputProps?: FieldInputProps<string>;
}

const CustomInput: React.FC<ICustomInputPropsType> = (props): JSX.Element => {
  const [text, setText] = useState<string>(props.value);
  const [type, setType] = useState<string>(props.type);
  const [icon, setIcon] = useState<string>(props.icon);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setText(event.target.value);
  };

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
    <CustomInputStyled
      className={props.className}
      touched={props.touched}
      error={props.error}
    >
      <img onClick={handleTogglePassword} src={icon} alt={props.alt} />
      <input
        autoComplete={props.autocomplete}
        type={type}
        value={text}
        disabled={props.disabled}
        onChange={(event) => handleChangeInput(event)}
        placeholder={props.placeholder}
        {...props.fieldInputProps}
      />
    </CustomInputStyled>
  );
};

export default CustomInput;
