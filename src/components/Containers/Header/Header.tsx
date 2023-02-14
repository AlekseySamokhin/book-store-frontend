import { CheckAuth } from '@/components/Containers';
import { Logo, Search } from '@/components/ui';
import { MenuBeforeAuth, MenuAfterAuth } from './components';

import { Container } from '@/components/styles';

import { HeaderStyled } from './Header.styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderStyled>
        <div className="header__link">
          <Logo className='header__logo' position="header" />
          <span className='header__catalog'>Catalog</span>
        </div>

        <Search className='header__search' />

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
