import { useState, useEffect } from 'react';
import { useAppSelector } from '@/redux/store';

import { MenuItem } from '@/components/ui';

import { icons } from '@/assets';

import { MenuAfterAuthStyled } from './MenuAfterAuth.styles';
// import type { ITypeComment } from '@/interfaces/commentInterfaces';

interface ITypeProps {
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  socket: any;
}

interface ITypeNotification {
  userId: number;
  type: string;
  bookId: number;
}

const MenuAfterAuth: React.FC<ITypeProps> = (props) => {
  const cart = useAppSelector((state) => state.auth.cart);
  const favorites = useAppSelector((state) => state.auth.favorites);

  const [notifications, setNotifications] = useState<ITypeNotification[]>([]);

  useEffect(() => {
    props.socket.on(
      'get_notification',
      (newNotification: {
        userId: number;
        type: string;
        bookId: number;
      }) => {
        setNotifications((prevNotifications) => [
          ...prevNotifications,
          newNotification,
        ]);
      },
    );
  }, [props.socket]);

  // console.log(notifications);

  return (
    <MenuAfterAuthStyled className={props.className}>
      <MenuItem count={notifications.length} icon={icons.notification} alt="notification icon" />
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
