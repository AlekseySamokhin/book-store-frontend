import { useAppSelector } from '@/redux/store';

import { Container } from '@/components/styles';

import { FavoritesStyled } from './Favorites.styles';

const Favorites: React.FC = () => {
  const favoritesBooks = useAppSelector((state) => state.auth.favoritesBooks);

  return (
    <Container>
      <FavoritesStyled>
        {favoritesBooks.map((book) => (
          <h1>{book.author}</h1>

        ))}
      </FavoritesStyled>
    </Container>
  );
};

export { Favorites };
