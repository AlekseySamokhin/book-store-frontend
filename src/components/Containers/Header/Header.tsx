import { CheckAuth } from '@/components/Containers';
import { Logo, Search } from '@/components/ui';
import { Container } from '@/components/styles';

import { MenuBeforeAuth, MenuAfterAuth } from './components';

import { HeaderStyled } from './Header.styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderStyled>
        <div className="header__link">
          <Logo position="header" />
          <span>Catalog</span>
        </div>

        <Search />

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
