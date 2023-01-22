import { Link } from 'react-router-dom';

import { useAppSelector } from '../../../redux/store';

import { MenuBeforeAuth, MenuAfterAuth } from './Menu';
import { Logo } from '../../Logo';
import Container from '../../../styles/Container';
import { logos } from '../../../assets';

import { HeaderStyled } from './Header.styles';
import { Search } from '../../Search/Search';

interface ITypesProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const Header: React.FC<ITypesProps> = (props): JSX.Element => {
  const authUser = useAppSelector((state) => state.users.user.email);

  return (
    <Container>
      <HeaderStyled>
        <div className="header__link">
          <Link to="/">
            <Logo src={logos.logoHeader} alt="Book logo" />
          </Link>
          <span>Catalog</span>
        </div>
        <Search searchValue={props.searchValue} setSearchValue={props.setSearchValue} />

        {authUser ? (
          <MenuAfterAuth />
        ) : (
          <MenuBeforeAuth className="header__menu" />
        )}
      </HeaderStyled>
    </Container>
  );
};

export { Header };
