import { useState } from 'react';

import { Link } from 'react-router-dom';

import { MenuItemStyled } from './MenuItem.styles';

import type { ITypeNotification } from '@/components/Containers/Header/components/MenuAfterAuth/MenuAfterAuth';

interface ITypeProps {
  icon: string;
  alt?: string;
  path?: string;
  count?: number;
  className?: string;
  toast?: boolean;
  notifications?: ITypeNotification[];
}

const MenuItem: React.FC<ITypeProps> = (props) => {
  const [showToast, setShowToast] = useState(false);

  const toogleToast = () => {
    setShowToast(!showToast);
  };

  return (
    <Link to={props.path || ''}>
      <MenuItemStyled
        onClick={props.toast && props.count !== 0 ? toogleToast : () => null}
        className={props.className}
      >
        {!!Number(props.count) && (
          <div className="menu-item__count">{props.count}</div>
        )}

        <img className="menu-item__icon" src={props.icon} alt={props.alt} />

        {showToast && props.notifications ? (
          <div className="menu-item__toast">
            <ul className="menu-item__toast_list">
              {props.notifications.map((item, index) => (
                <Link to={`/product/${item.bookId}/#${item.bookId}`}>
                  <li className="menu-item__toast_list_item" key={index}>
                    {item.user.fullName ? item.user.fullName : 'Кто-то'}
                    {' оставил комментарий '}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ) : null}
      </MenuItemStyled>
    </Link>
  );
};

export { MenuItem };
