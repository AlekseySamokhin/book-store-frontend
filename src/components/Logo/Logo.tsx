import React from 'react';

import styled from 'styled-components';

import LogoSvg from '../../assets/logo.svg';

const LinkStyled = styled.a`
  display: block;
`;

const ImageStyled = styled.img`
  display: block;
`;

const Logo: React.FC = () => {
  return (
    <LinkStyled href="/">
      <ImageStyled src={LogoSvg} alt="Logo Book store" />
    </LinkStyled>
  );
};

export default Logo;
