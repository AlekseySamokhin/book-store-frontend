import { Link } from 'react-router-dom';

import { AuthMenu } from '../../AuthMenu';

import HeaderStyled from './Header.styled';

import { useAppSelector } from '../../../redux/store';

import { Button } from '../../Button';
import CustomInput from '../../CustomInput';

import Container from '../../../styles/Container';

import { Logo } from '../../Logo';
import imageLogo from '../../../assets/logo-header.svg';
import searchIcon from '../../../assets/search.svg';

const Header: React.FC = () => {
  const authUser = useAppSelector((state) => state.users.user.email);

  return (
    <Container>
      <HeaderStyled>
        <div className="header__link">
          <Link to="/">
            <Logo src={imageLogo} />
          </Link>
          <span>Catalog</span>
        </div>
        <CustomInput
          type="search"
          error={''}
          icon={searchIcon}
          placeholder={'Search'}
        />

        {authUser ? (
          <div className="header__button">
            <AuthMenu />
          </div>
        ) : (
          <Button className="header__button">
            <Link to="signin">Log In</Link> /<Link to="signup">Sign Up</Link>
          </Button>
        )}
      </HeaderStyled>
    </Container>
  );
};

export default Header;
