import React from 'react';

import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';

import Logo from '../../Logo';

import imageLogo from '../../../assets/logo-header.svg';

import HeaderStyled from './Header.styled';
import ButtonStyled from '../../Button';

import InputStyled from '../../Input';

import Container from '../../styles/Container';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderStyled>
        <div className="header__link">
          <Link to="/">
            <Logo src={imageLogo} />
          </Link>
          <span>Catalog</span>
        </div>
        <InputStyled />
        <ButtonStyled>Log In/ Sign Up</ButtonStyled>
      </HeaderStyled>
    </Container>
  );
};

export default Header;
