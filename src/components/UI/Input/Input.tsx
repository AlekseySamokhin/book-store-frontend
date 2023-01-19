/* eslint-disable no-console */
import { useState } from 'react';
import type { FieldInputProps } from 'formik';

import { InputStyled } from './Input.styles';

import { icons } from '../../../assets';

interface ICustomInputPropsType {
  autocomplete?: string;
  type?: string;
  placeholder?: string;
  icon?: string;
  alt?: string;
  error?: string;
  value?: string;
  disabled?: boolean;
  hide?: boolean;
  title?: string;
  text?: string;
  touched?: boolean;
  description?: string;
  className?: string;
  fieldInputProps?: FieldInputProps<string>;
}

const Input: React.FC<ICustomInputPropsType> = (props): JSX.Element => {
  const [text, setText] = useState<string>(props.value || '');
  const [type, setType] = useState<string>(props.type || '');
  const [icon, setIcon] = useState<string>(props.icon || '');

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    event.preventDefault();
    setText(event.target.value);
  };

  const handleTogglePass = () => {
    if (props.type !== 'password' || props.value === '') return;

    if (type === 'password') {
      setType('text');
      setIcon(icons.view);
    }

    if (type === 'text') {
      setType('password');
      setIcon(props.icon || '');
    }
  };

  return (
    <InputStyled
      className={props.className}
      touched={props.touched}
      error={props.error}
    >
      <div className='custom__input'>
        <img
          className="input__icons"
          onClick={handleTogglePass}
          src={icon}
          alt={props.alt}
        />

        <div className="input__text">
          {!props.hide ? (
            <input
              autoComplete="off"
              type={type}
              value={text}
              disabled={!props.disabled}
              onChange={(event) => handleChangeInput(event)}
              placeholder={props.placeholder}
              {...props.fieldInputProps}
            />
          ) : (
            <>
              <p className="input__text_title">{props.title}</p>
              <p className="input__text_text">{props.text}</p>
            </>
          )}
        </div>
      </div>

      {props.error && props.touched ? (
        <p className='error-message'>{props.error}</p>
      ) : (
        <p className='primary-message'>{props.description}</p>
      )}
    </InputStyled>
  );
};

export { Input };
