import { MenuBeforeAuth, MenuAfterAuth } from './Menu';
import { Logo } from '../../ui/Logo';
import { Container } from '../../../styles/Container';
import { HeaderStyled } from './Header.styles';
import { Search } from '../../ui/Search/Search';
import { CheckAuth } from '../CheckAuth';

interface ITypesProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const Header: React.FC<ITypesProps> = (props): JSX.Element => {
  return (
    <Container>
      <HeaderStyled>
        <div className="header__link">
          <Logo position="header" />
          <span>Catalog</span>
        </div>

        <Search
          searchValue={props.searchValue}
          setSearchValue={props.setSearchValue}
        />

        <CheckAuth needAuth={true}>
          <MenuAfterAuth />
        </CheckAuth>

        <CheckAuth needAuth={false}>
          <MenuBeforeAuth className="header__menu" />
        </CheckAuth>
      </HeaderStyled>
    </Container>
  );
};

export { Header };
