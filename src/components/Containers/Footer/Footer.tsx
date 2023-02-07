import { Link } from 'react-router-dom';

import { userActions } from '@/redux/users/userSlice';
import { useAppDispatch } from '@/redux/store';

import { CheckAuth } from '@/components/Containers';
import { Logo } from '@/components/ui';
import { ContainerStyled, FlexStyled } from '@/components/styles';

import { images } from '@/assets';

import { FooterStyled } from './Footer.styles';

const Footer: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(userActions.signOut());
  };

  return (
    <FooterStyled>
      <ContainerStyled>
        <footer className="footer">
          <FlexStyled direction="column">
            <Logo position="footer" />

            <div className="footer__contacts">
              <a href="mailto:tranthuy.nute@gmail.com">
                tranthuy.nute@gmail.com
              </a>

              <a href="tel:+74805550103">+7 (480) 555-0103</a>
            </div>
          </FlexStyled>
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

            <CheckAuth needAuth={true}>
              <li onClick={handleSignOut}>Logout</li>
            </CheckAuth>
          </ul>

          <div className="footer__location">
            <span>6391 Elgin St. Celina, Delaware 10299</span>
            <img src={images.footerMap} alt="Google maps location" />
          </div>
        </footer>
      </ContainerStyled>
    </FooterStyled>
  );
};

export { Footer };
