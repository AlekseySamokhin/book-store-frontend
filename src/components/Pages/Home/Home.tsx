import { CheckAuth } from '@/components/Containers';
import { BookBanner, AuthBanner } from '@/components/ui';
import { Container } from '@/components/styles';
import { Catalog } from './Catalog';

import { HomeStyled } from './Home.styles';

const Home = () => {
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
