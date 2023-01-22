import { useAppSelector } from '../../../redux/store';

import { BookBanner, AuthBanner } from '../../Banner';
import { Catalog } from './components/Catalog';

import Container from '../../../styles/Container';

interface ITypeProps {
  searchValue: string;
}

const Home: React.FC<ITypeProps> = (props): JSX.Element => {
  const auth = useAppSelector((state) => state.users.user.email);
  return (
    <Container>
      <BookBanner />
      <Catalog searchValue={props.searchValue} />
      {!auth && <AuthBanner />}
    </Container>
  );
};

export { Home };
