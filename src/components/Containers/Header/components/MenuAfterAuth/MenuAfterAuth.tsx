import { useAppSelector } from '@/redux/store';

import { MenuItem } from '@/components/ui';

import { icons } from '@/assets';

import { MenuAfterAuthStyled } from './MenuAfterAuth.styles';

const MenuAfterAuth = () => {
  const cart = useAppSelector((state) => state.auth.cart);
  const favorites = useAppSelector((state) => state.auth.favorites);

  return (
    <MenuAfterAuthStyled>
      <MenuItem count={cart.length} path="cart" icon={icons.cart} alt="cart icon" />
      <MenuItem count={favorites.length} path="favorites" icon={icons.like} alt="like icon" />
      <MenuItem path="profile" icon={icons.user} alt="user icon" />
    </MenuAfterAuthStyled>
  );
};

export { MenuAfterAuth };
