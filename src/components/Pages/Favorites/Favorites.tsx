import { useAppSelector } from '@/redux/store';

import { images } from '@/assets';
import { BookItem } from '../Home/Catalog/components';

import { Container } from '@/components/styles';
import { FavoritesStyled } from './Favorites.styles';

const Favorites: React.FC = () => {
  const favoritesBooks = useAppSelector((state) => state.auth.favorites);

  return (
    <Container>
      <FavoritesStyled>
        {favoritesBooks.length !== 0 ? (
          <>
            <h1 className="favorites__title">Favorites books</h1>

            <div className="favorites__list">
              {favoritesBooks.map((book) => (
                <BookItem key={book.bookId} book={book} />
              ))}
            </div>
          </>
        ) : (
          <div className="favorites__empty">
            <img src={images.heart} alt="heart" />

            <h2>List of favorite books is empty</h2>
          </div>
        )}
      </FavoritesStyled>
    </Container>
  );
};

export { Favorites };
