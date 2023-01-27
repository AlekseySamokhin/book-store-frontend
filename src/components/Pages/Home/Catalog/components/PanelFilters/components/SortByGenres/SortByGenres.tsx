/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { booksService } from '@/api/services';
import { GenreItem } from './GenreItem';

import { SortByGenresStyled } from './SortByGenres.styles';

const SortByGenres: React.FC = (): JSX.Element => {
  const [genres, setGenres] = useState<{ genreId: number; name: string }[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentGenres, setCurrentGenres] = useState('');

  const handleChangeGenre = (name: string) => {
    setSearchParams({ genres: name });
  };

  useEffect(() => {
    setCurrentGenres(searchParams.get('genres') || '');
  }, [searchParams]);

  useEffect(() => {
    (async () => {
      try {
        const arrGenres = await booksService.getAllGenres();

        setGenres(arrGenres);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <SortByGenresStyled>
      {genres.map((genre) => (
        <GenreItem
          key={genre.genreId}
          changeGenre={handleChangeGenre}
          value={currentGenres.includes(genre.name)}
          genre={genre}
        />
      ))}
    </SortByGenresStyled>
  );
};

export { SortByGenres };
