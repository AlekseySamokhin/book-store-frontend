import { useAppSelector } from '../../../redux/store';

import { BookBanner, AuthBanner } from '../../Banner';
import Container from '../../../styles/Container';
import { Catalog } from './components/Catalog';

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

export default Home;
