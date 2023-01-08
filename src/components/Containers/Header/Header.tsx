import { Link } from 'react-router-dom';

import HeaderStyled from './Header.styled';

import { Button } from '../../Button';
import CustomInput from '../../CustomInput';

import Container from '../../../styles/Container';

import { Logo } from '../../Logo';
import imageLogo from '../../../assets/logo-header.svg';
import searchIcon from '../../../assets/search.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderStyled>
        <div className="header__link">
          <Link to="/">
            <Logo src={imageLogo} />
          </Link>
          <span>Catalog</span>
        </div>
        <CustomInput type='search' error={''} icon={searchIcon} placeholder={'Search'} />
        <Button>Log In/ Sign Up</Button>
      </HeaderStyled>
    </Container>
  );
};

export default Header;
