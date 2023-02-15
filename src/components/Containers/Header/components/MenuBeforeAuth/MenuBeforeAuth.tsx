import { Link } from 'react-router-dom';

import { Button } from '@/components/ui';

import { MenuBeforeAuthStyled } from './MenuBeforeAuth.styles';

interface ITypeProps {
  className?: string;
  children?: React.ReactNode;
}

const MenuBeforeAuth: React.FC<ITypeProps> = (props) => {
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
