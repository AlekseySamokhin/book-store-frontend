import { Link } from 'react-router-dom';

import { MenuItemStyled } from './MenuItem.styles';

interface ITypeProps {
  icon: string;
  alt?: string;
  path?: string;
  count?: number;
  children?: JSX.Element;
  className?: string;
}

const MenuItem: React.FC<ITypeProps> = (props) => {
  return (
    <Link to={props.path || ''}>
      <MenuItemStyled className={props.className}>
        {!!Number(props.count) && (<div className="menu-item__count">{props.count}</div>)}

        <img className="menu-item__icon" src={props.icon} alt={props.alt} />
        {props.children}
      </MenuItemStyled>
    </Link>
  );
};

export { MenuItem };
