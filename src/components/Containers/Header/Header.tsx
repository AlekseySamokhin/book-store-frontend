import { CheckAuth } from '@/components/Containers';
import { Logo, Search } from '@/components/ui';
import { Container } from '@/components/styles';

import { MenuBeforeAuth, MenuAfterAuth } from './components';

import { HeaderStyled } from './Header.styles';

interface ITypeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  socket: any;
}

const Header: React.FC<ITypeProps> = (props) => {
  return (
    <Container>
      <HeaderStyled>
        <Logo className="header__logo" position="header" />

        <h4 className="header__notification">Catalog</h4>

        <Search className="header__input" />

        <CheckAuth needAuth={true}>
          <MenuAfterAuth
            socket={props.socket}
            className="header__menu"
          />
        </CheckAuth>

        <CheckAuth needAuth={false}>
          <MenuBeforeAuth className="header__menu" />
        </CheckAuth>
      </HeaderStyled>
    </Container>
  );
};

export { Header };
