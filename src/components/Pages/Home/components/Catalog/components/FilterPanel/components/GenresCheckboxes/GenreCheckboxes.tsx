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

  return (
    <GenreCheckboxesStyled>
      {genres.map((item) => (
        <h1 key={item.genreId}>{item.name}</h1>
      ))}
    </GenreCheckboxesStyled>
  );
};

export { GenreCheckboxes };
