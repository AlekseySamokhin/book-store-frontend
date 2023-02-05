/* eslint-disable no-console */
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { booksService } from '@/api/services';
import { Genre } from './Genre';

import { FilterByGenresStyled } from './SortByGenres.styles';

const FilterByGenres: React.FC = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [genres, setGenres] = useState<{ genreId: number; name: string }[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const genres = await booksService.getAllGenres();

        setGenres(genres);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const currentGenres = useMemo(() => {
    return searchParams.get('genres')?.split(',') || [];
  }, [searchParams]);

  const handleChangeGenre = (genreId: number) => {
    const indexGenre = currentGenres.findIndex(
      (id) => id === genreId.toString(),
    );

    const newGenres = [...currentGenres];

    if (indexGenre === -1) {
      newGenres.push(genreId.toString());
    } else {
      newGenres.splice(indexGenre, 1);
    }

    if (newGenres.length) {
      searchParams.set('genres', newGenres.join(','));
    } else {
      searchParams.delete('genres');
    }

    setSearchParams(searchParams);
  };

  return (
    <FilterByGenresStyled>
      {genres.map((genre) => (
        <Genre
          key={genre.genreId}
          changeGenre={handleChangeGenre}
          checked={currentGenres.includes(genre.genreId.toString())}
          genre={genre}
        />
      ))}
    </FilterByGenresStyled>
  );
};

export { FilterByGenres };
