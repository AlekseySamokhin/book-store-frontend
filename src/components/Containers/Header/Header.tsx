import React from 'react';

// import { Link } from 'react-router-dom';

import Logo from '../../Logo';

import imageSearch from '../../../assets/search.svg';
import imageLogo from '../../../assets/logo-header.svg';

import HeaderStyled from './Header.styled';
import InputStyled from '../../Input';
import ButtonStyled from '../../Button';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <div className="header__link">
        <Logo src={imageLogo} />
        <span>Catalog</span>
      </div>
      <label className="header__search" htmlFor="search">
        <img className="input__image" src={imageSearch} alt="Search icon" />
        <InputStyled id="search" placeholder="Search" />
      </label>
      <ButtonStyled>Log In/ Sign Up</ButtonStyled>
    </HeaderStyled>
  );
};

export default Header;
