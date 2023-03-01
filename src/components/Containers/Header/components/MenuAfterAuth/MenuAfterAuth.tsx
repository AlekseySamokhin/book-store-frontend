import { useState, useEffect } from 'react';
import { useAppSelector } from '@/redux/store';

import { MenuItem } from '@/components/ui';

import { icons } from '@/assets';

import { MenuAfterAuthStyled } from './MenuAfterAuth.styles';
import type { ITypeDataUser } from '@/interfaces/userInterfaces';

interface ITypeProps {
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  socket: any;
}

export interface ITypeNotification {
  user: ITypeDataUser;
  text: string;
  bookId: number;
}

const MenuAfterAuth: React.FC<ITypeProps> = (props) => {
  const [notifications, setNotifications] = useState<ITypeNotification[]>([]);
  const cart = useAppSelector((state) => state.auth.cart);
  const favorites = useAppSelector((state) => state.auth.favorites);

  const arrayIdBooks: Array<number> = [];

  favorites.forEach((book) => arrayIdBooks.push(Number(book.bookId)));

  useEffect(() => {
    props.socket.on(
      'get_notification',
      (newNotification: ITypeNotification) => {
        const haveIdinFavorites = arrayIdBooks.some(
          (elem) => elem === newNotification.bookId,
        );

        if (haveIdinFavorites) {
          setNotifications((prevNotifications) => [
            ...prevNotifications,
            newNotification,
          ]);
        }
      },
    );
  }, [props.socket]);

  return (
    <MenuAfterAuthStyled className={props.className}>
      <MenuItem
        toast={true}
        count={notifications.length}
        notifications={notifications}
        icon={icons.notification}
        alt="notification icon"
      />

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
