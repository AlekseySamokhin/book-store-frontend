import React from 'react';

import InputStyled from './Input.styled';

interface IUnputProps {
  type?: string;
  placeholder?: string;
  icon?: string;
  alt?: string;
}

const Input: React.FC<IUnputProps> = (props: IUnputProps) => {
  return (
    <InputStyled>
      <img src={props.icon} alt={props.alt} />
      <input type={props.type} placeholder={props.placeholder} />
    </InputStyled>
  );
};

export default Input;
