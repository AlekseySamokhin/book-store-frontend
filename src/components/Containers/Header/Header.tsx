import { CheckAuth } from '@/components/hoc';
import { Logo, Search } from '@/components/ui';
import { ContainerStyled } from '@/components/styles';

import { MenuBeforeAuth, MenuAfterAuth } from './components';

import { HeaderStyled } from './Header.styles';

const Header: React.FC = (): JSX.Element => {
  return (
    <ContainerStyled>
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
    </ContainerStyled>
  );
};

export { Header };
