import { BookBanner, AuthBanner } from '@/components/ui/Banners';

import { Catalog } from './Catalog';

import { ContainerStyled } from '@/components/styles';

import { CheckAuth } from '@/components/hoc/CheckAuth';

const Home: React.FC = (): JSX.Element => {
  return (
    <ContainerStyled>
      <BookBanner />

      <Catalog />

      <CheckAuth needAuth={false}>
        <AuthBanner />
      </CheckAuth>
    </ContainerStyled>
  );
};

export { Home };
