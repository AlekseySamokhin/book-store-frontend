import { BookBanner, AuthBanner } from '@/components/ui';
import { CheckAuth } from '@/components/Containers';
import { Container } from '@/components/styles';

import { Catalog } from './Catalog';

import { HomeStyled } from './Home.styles';

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <HomeStyled>
        <BookBanner className="home__book_banner" />

        <Catalog className="home__catalog" />

        <CheckAuth needAuth={false}>
          <AuthBanner className="home__auth_banner" />
        </CheckAuth>
      </HomeStyled>
    </Container>
  );
};

export { Home };
