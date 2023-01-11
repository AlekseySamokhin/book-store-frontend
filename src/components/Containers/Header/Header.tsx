import { Link } from 'react-router-dom';

import { useAppSelector } from '../../../redux/store';

import CustomInput from '../../CustomInput';
import { MenuBeforeAuth, MenuAfterAuth } from './Menu';
import { Logo } from '../../Logo';
import Container from '../../../styles/Container';
import { icons, logos } from '../../../assets';

import { HeaderStyled } from './Header.styles';

const Header: React.FC = (): JSX.Element => {
  const authUser = useAppSelector((state) => state.users.user.email);

  return (
    <Container>
      <HeaderStyled>
        <div className="header__link">
          <Link to="/">
            <Logo src={logos.logoHeader} />
          </Link>
          <span>Catalog</span>
        </div>
        <CustomInput
          type="search"
          error={''}
          icon={icons.search}
          placeholder={'Search'}
        />

        {authUser ? <MenuAfterAuth /> : <MenuBeforeAuth className='header__menu' />}
      </HeaderStyled>
    </Container>
  );
};

export default Header;
