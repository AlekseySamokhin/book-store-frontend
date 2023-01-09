import { Link } from 'react-router-dom';

import user from '../../assets/user.svg';
import cart from '../../assets/cart.svg';
import like from '../../assets/like.svg';

import { AuthStyled } from './AuthMenu.styled';

const authItems = [
  { path: 'cart', icon: cart, alt: 'Cart icon' },
  { path: 'favorites', icon: like, alt: 'Like icon' },
  { path: 'profile', icon: user, alt: 'User icon' },
];

const AuthMenu = () => {
  return (
    <AuthStyled>
      {authItems.map((item) => (
        <Link key={item.path} to={item.path}>
          <div>
            <img src={item.icon} alt={item.alt} />
          </div>
        </Link>
      ))}
    </AuthStyled>
  );
};

export { AuthMenu };
