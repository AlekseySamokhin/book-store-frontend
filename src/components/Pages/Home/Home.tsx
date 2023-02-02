import { BookBanner, AuthBanner } from '@/components/ui/Banners';

import { CheckAuth } from '@/components/hoc/';
import { ContainerStyled } from '@/components/styles';

import { Catalog } from './Catalog';

import { HomeStyled } from './Home.styles';

const Home: React.FC = (): JSX.Element => {
  return (
    <ContainerStyled>
      <HomeStyled>
        <BookBanner className="home__book_banner" />

        <Catalog className="home__catalog" />

        <CheckAuth needAuth={false}>
          <AuthBanner className="home__auth_banner" />
        </CheckAuth>
      </HomeStyled>
    </ContainerStyled>
  );
};

export { Home };
