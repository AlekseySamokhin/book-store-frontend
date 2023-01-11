import { Link } from 'react-router-dom';

import { Button } from '../../../../Button';

import { MenuBeforeAuthStyled } from './MenuBeforeAuth.styled';

interface IStyledPropsType {
  className: string;
  children?: React.ReactNode;
}

const MenuBeforeAuth: React.FC<IStyledPropsType> = (props) => {
  return (
    <MenuBeforeAuthStyled className={props.className}>
      <Link to="signup">
        <Button>Sing Up</Button>
      </Link>
      <Link to="signin">
        <Button>Sing In</Button>
      </Link>
    </MenuBeforeAuthStyled>
  );
};

export { MenuBeforeAuth };
