import { Link } from 'react-router-dom';

import { icons } from '../../../../../assets';

import { MenuAfterAuthStyled } from './MenuAfterAuth.styled';

const authItems = [
  { path: 'cart', icon: icons.cart, alt: 'Cart icon' },
  { path: 'favorites', icon: icons.like, alt: 'Like icon' },
  { path: 'profile', icon: icons.user, alt: 'User icon' },
];

const MenuAfterAuth = () => {
  return (
    <MenuAfterAuthStyled>
      {authItems.map((item) => (
        <Link key={item.path} to={item.path}>
          <div>
            <img src={item.icon} alt={item.alt} />
          </div>
        </Link>
      ))}
    </MenuAfterAuthStyled>
  );
};

export { MenuAfterAuth };
