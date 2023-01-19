import { MenuItem } from '../../../../UI';
import { icons } from '../../../../../assets';

import { MenuAfterAuthStyled } from './MenuAfterAuth.styles';

const authItems = [
  { path: 'cart', icon: icons.cart, alt: 'Cart icon' },
  { path: 'favorites', icon: icons.like, alt: 'Like icon' },
  { path: 'profile', icon: icons.user, alt: 'User icon' },
];

const MenuAfterAuth = () => {
  return (
    <MenuAfterAuthStyled>
      {authItems.map((item) => (
        <MenuItem path={item.path} icon={item.icon} alt={item.icon} />
      ))}
    </MenuAfterAuthStyled>
  );
};

export { MenuAfterAuth };
