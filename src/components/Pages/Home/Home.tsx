import { BookBanner, AuthBanner } from '../../ui/Banner';
import { Catalog } from './Catalog';

import { Container } from '../../../styles/Container';

import { CheckAuth } from '../../Containers/CheckAuth';

interface ITypeProps {
  searchValue: string;
}

const Home: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <Container>
      <BookBanner />

      <Catalog searchValue={props.searchValue} />

      <CheckAuth needAuth={false}>
        <AuthBanner />
      </CheckAuth>
    </Container>
  );
};

export { Home };
