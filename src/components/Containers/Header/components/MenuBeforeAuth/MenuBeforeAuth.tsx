import { Link } from 'react-router-dom';

import { Button } from '../../../../ui';

import { MenuBeforeAuthStyled } from './MenuBeforeAuth.styled';

interface IStyledPropsType {
  className: string;
  children?: React.ReactNode;
}

const MenuBeforeAuth: React.FC<IStyledPropsType> = (props) => {
  return (
    <MenuBeforeAuthStyled className={props.className}>
      <Link to="signin">
        <Button className="menu-before-auth__button">Sign In</Button>
      </Link>
      <Link to="signup">
        <Button className="menu-before-auth__button">Sign Up</Button>
      </Link>
    </MenuBeforeAuthStyled>
  );
};

export { MenuBeforeAuth };
