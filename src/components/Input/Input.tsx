import React from 'react';

import imageSearch from '../../assets/search.svg';

import InputStyled from './Input.styled';

const Input: React.FC = () => {
  return (
    <InputStyled className="search">
      <img className="search__icon" src={imageSearch} alt="Search icon" />
      <input className="search__input" placeholder="Search" />
    </InputStyled>
  );
};

export default Input;
