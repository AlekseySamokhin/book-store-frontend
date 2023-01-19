import { Link } from 'react-router-dom';

import { userActions } from '../../../redux/users/userSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';

import Container from '../../../styles/Container';
import { Flex } from '../../../styles/Flex';
import { Logo } from '../../Logo';
import { logos, images } from '../../../assets';

import FooterStyled from './Footer.styles';

const Footer: React.FC = (): JSX.Element => {
  const email = useAppSelector((state) => state.users.user.email);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(userActions.signOut());
  };

  return (
    <FooterStyled>
      <Container>
        <footer className="footer">
          <Flex direction="column">
            <Logo src={logos.logoFooter} />

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
            {email ? <li onClick={handleLogout}>Logout</li> : null}
          </ul>
          <div className="footer__location">
            <span>6391 Elgin St. Celina, Delaware 10299</span>
            <img src={images.footerMap} alt="Google maps location" />
          </div>
        </footer>
      </Container>
    </FooterStyled>
  );
};

export { Footer };
