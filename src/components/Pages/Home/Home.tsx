import { useAppSelector } from '../../../redux/store';

import { BookBanner, AuthBanner } from '../../Banner';
import { Catalog } from './components/Catalog';

import Container from '../../../styles/Container';

const Home: React.FC = (): JSX.Element => {
  const auth = useAppSelector((state) => state.users.user.email);
  return (
    <Container>
      <BookBanner />
      <Catalog />
      {!auth && <AuthBanner />}
    </Container>
  );
};

export { Home };
