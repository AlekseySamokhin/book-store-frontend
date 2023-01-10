import React from 'react';

import { Link } from 'react-router-dom';

import FooterStyled from './Footer.styled';

import Container from '../../../styles/Container';

import { Logo } from '../../Logo';

import imageLogo from '../../../assets/logo-footer.svg';
import imageMaps from '../../../assets/map.png';
import { useAppDispatch } from '../../../redux/store';

import { Flex } from '../../../styles/Flex';

import { logout } from '../../../redux/users/usersSlice';

const Footer: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <FooterStyled>
      <Container>
        <footer className="footer">
          <Flex direction="column">
            <Logo src={imageLogo} />

            <div className="footer__contacts">
              <a href="mailto:tranthuy.nute@gmail.com">
                tranthuy.nute@gmail.com
              </a>
              <a href="tel:+74805550103">+7 (480) 555-0103</a>
            </div>
          </Flex>
          <ul className="footer__nav">
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="catalog">Catalog</Link>
            </li>
            <li>
              <Link to="profile">My Account</Link>
            </li>
            <li>
              <Link to="cart">Cart</Link>
            </li>
            <li onClick={handleLogout}>Logout</li>
          </ul>
          <div className="footer__location">
            <span>6391 Elgin St. Celina, Delaware 10299</span>
            <img src={imageMaps} alt="Google maps location" />
          </div>
        </footer>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
