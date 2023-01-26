/* eslint-disable no-console */
import { useEffect, useState } from 'react';

import { GenreCheckboxesStyled } from './GenreCheckboxes.styles';
import { booksService } from '@/api/services';
// import { icons } from '@/assets';

interface ITypesGenre {
  genreId: number;
  name: string;
}

const GenreCheckboxes: React.FC = (): JSX.Element => {
  const [genres, setGenres] = useState<ITypesGenre[]>([]);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const arrGenres = await booksService.getAllGenres();

      setGenres(arrGenres);
    })();
  }, []);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <GenreCheckboxesStyled>
      {genres.map((genre) => (
        <label key={genre.genreId} htmlFor={genre.name}>
          <div className="genre-checkbox__block">
            <input
              type="checkbox"
              name={genre.name}
              checked={checked}
              id={genre.name}
              onChange={handleChecked}
              hidden
            />

            <div
              className={`genre-checkbox__item ${
                checked ? 'checked' : 'unchecked'
              }`}
            ></div>

            <p className="genre-checkbox__name">{genre.name}</p>
          </div>
        </label>
      ))}
    </GenreCheckboxesStyled>
  );
};

export { GenreCheckboxes };
