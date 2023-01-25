/* eslint-disable no-console */
import { useEffect, useState } from 'react';

import { GenreCheckboxesStyled } from './GenreCheckboxes.styles';
import { booksService } from '../../../../../../../../../api/services';

interface ITypesGenre {
  genreId: number;
  name: string;
}

const GenreCheckboxes: React.FC = (): JSX.Element => {
  const [genres, setGenres] = useState<ITypesGenre[]>([]);

  useEffect(() => {
    (async () => {
      const arrGenres = await booksService.getAllGenres();

      setGenres(arrGenres);
    })();
  }, []);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.preventDefault());
  };

  return (
    <GenreCheckboxesStyled>
      {genres.map((genre) => (
        <div key={genre.genreId}>
          <input
            type="checkbox"
            name={genre.name}
            onChange={handleChecked} />
          {genre.name}
        </div>
      ))}
    </GenreCheckboxesStyled>
  );
};

export { GenreCheckboxes };
