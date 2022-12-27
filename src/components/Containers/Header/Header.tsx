import React from 'react';

// import { Link } from 'react-router-dom';

import Logo from '../../Logo';

import imageLogo from '../../../assets/logo-header.svg';

import HeaderStyled from './Header.styled';
import ButtonStyled from '../../Button';

import InputStyled from '../../../components/Input/Input';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <div className="header__link">
        <Logo src={imageLogo} />
        <span>Catalog</span>
      </div>
      <InputStyled />
      <ButtonStyled>Log In/ Sign Up</ButtonStyled>
    </HeaderStyled>
  );
};

export default Header;
