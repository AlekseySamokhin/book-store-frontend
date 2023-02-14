import { Link } from 'react-router-dom';

import { useAppDispatch } from '@/redux/store';
import { userActions } from '@/redux/users/userSlice';

import { CheckAuth } from '@/components/Containers';
import { Logo } from '@/components/ui';
import { Container, FlexStyled } from '@/components/styles';

import { images } from '@/assets';

import { FooterStyled } from './Footer.styles';

const Footer: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(userActions.signOut());
  };

  return (
    <FooterStyled>
      <Container>
        <footer className="footer">
          <FlexStyled direction="column">
            <Logo className='footer__logo' position="footer" />

            <div className="footer__contacts">
              <a className='footer__contacts_email' href="mailto:tranthuy.nute@gmail.com">
                tranthuy.nute@gmail.com
              </a>

              <a className='footer__contacts_tel' href="tel:+74805550103">+7 (480) 555-0103</a>
            </div>
          </FlexStyled>

          <ul className="footer__nav">
            <li className='footer__nav_item'>
              <Link to="/">Home Page</Link>
            </li>
            <li className='footer__nav_item'>
              <Link to="catalog">Catalog</Link>
            </li>
            <li className='footer__nav_item'>
              <Link to="profile">My Account</Link>
            </li>
            <li className='footer__nav_item'>
              <Link to="cart">Cart</Link>
            </li>

            <CheckAuth needAuth={true}>
              <li className='footer__nav_item' onClick={handleSignOut}>Logout</li>
            </CheckAuth>
          </ul>

          <div className="footer__location">
            <span className='footer__location_address'>6391 Elgin St. Celina, Delaware 10299</span>
            <img className='footer__location_map' src={images.footerMap} alt="Location in Google maps" />
          </div>
        </footer>
      </Container>
    </FooterStyled>
  );
};

export { Footer };
