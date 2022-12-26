import React from 'react';

import styled from 'styled-components';

import Logo from '../Logo/Logo';

const ButtonStyled = styled.button`
  padding: 10px 50px;
  background: #344966;
  border: none;
  cursor: pointer;
  border-radius: 16px;
  font-weight: 500;
  font-size: 16px;
  color: #f0f4ef;
`;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  height: 64px;
`;

const InputStyled = styled.input`
  height: 100%;
  background: #f0f4ef;
  border-radius: 16px;
  width: 640px;
  padding-left: 64px;
  color: #b9bac4;
`;

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Logo />
      <InputStyled placeholder="Search" />
      <ButtonStyled>Log In/ Sign Up</ButtonStyled>
    </HeaderStyled>
  );
};

export default Header;
