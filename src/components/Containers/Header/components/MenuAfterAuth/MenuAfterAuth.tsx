/* eslint-disable no-console */
import { useEffect } from 'react';
import { io } from 'socket.io-client';

import { useAppSelector } from '@/redux/store';

import { MenuItem } from '@/components/ui';

import { icons } from '@/assets';

import { MenuAfterAuthStyled } from './MenuAfterAuth.styles';
// import type { ITypeComment } from '@/interfaces/commentInterfaces';

interface ITypeProps {
  className?: string;
}

const socket = io('http://localhost:4000');

const MenuAfterAuth: React.FC<ITypeProps> = (props) => {
  // const [notification, setNotification] = useState<Array<number>>([]);
  const cart = useAppSelector((state) => state.auth.cart);
  const favorites = useAppSelector((state) => state.auth.favorites);

  useEffect(() => {
    socket.on('comments', () => {
      console.log(1);
    });
  }, [socket]);

  return (
    <MenuAfterAuthStyled className={props.className}>
      <MenuItem count={10} icon={icons.notification} alt="notification icon" />
      <MenuItem
        count={cart.length}
        path="cart"
        icon={icons.cart}
        alt="cart icon"
      />
      <MenuItem
        count={favorites.length}
        path="favorites"
        icon={icons.like}
        alt="like icon"
      />
      <MenuItem path="profile" icon={icons.user} alt="user icon" />
    </MenuAfterAuthStyled>
  );
};

export { MenuAfterAuth };
