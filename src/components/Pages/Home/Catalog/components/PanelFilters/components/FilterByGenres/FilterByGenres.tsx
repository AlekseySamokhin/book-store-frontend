/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { booksService } from '@/api/services';
import { Genre } from './Genre/Genre';

import { FilterByGenresStyled } from './SortByGenres.styles';

const FilterByGenres: React.FC = (): JSX.Element => {
  const [genres, setGenres] = useState<{ genreId: number; name: string }[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentGenres, setCurrentGenres] = useState<string>(searchParams.get('genres') || '');

  const arrayGenres = currentGenres.split(',');

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

  const handleChangeGenre = (genreName: string) => {
    let stringGenres = '';

    if (currentGenres.includes(genreName)) {
      const genreIndex = arrayGenres.indexOf(genreName);
      arrayGenres.splice(genreIndex, 1);

      stringGenres = arrayGenres.join();
    } else if (currentGenres.length === 0) {
      stringGenres = genreName;
    } else {
      stringGenres = `${currentGenres},${genreName}`;
    }

    searchParams.set('genres', stringGenres);

    setSearchParams(searchParams);
  };

  return (
    <FilterByGenresStyled>
      {genres.map((genre) => (
        <Genre
          key={genre.genreId}
          changeGenre={handleChangeGenre}
          value={currentGenres.includes(genre.name)}
          genre={genre}
        />
      ))}
    </FilterByGenresStyled>
  );
};

export { FilterByGenres };
