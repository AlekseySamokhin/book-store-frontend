// import { Link } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { MenuItemStyled } from './MenuItem.styles';

interface ITypesProps {
  icon?: string;
  alt?: string;
  path?: string;
  children?: JSX.Element;
  className?: string;
}

const MenuItem: React.FC<ITypesProps> = (props): JSX.Element => {
  return (
    <Link to={props.path || ''}>
      <MenuItemStyled className={props.className}>
        <img src={props.icon} alt={props.alt} />
        {props.children}
      </MenuItemStyled>
    </Link>
  );
};

export { MenuItem };
