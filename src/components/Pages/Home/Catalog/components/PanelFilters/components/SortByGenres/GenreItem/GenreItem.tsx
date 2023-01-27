import { useState } from 'react';

import { GenreItemStyled } from './GenreItem.styles';

interface ITypesProps {
  genre: {
    genreId: number;
    name: string;
  };

  value: boolean;
  changeGenre: (name: string) => void;
}

const GenreItem: React.FC<ITypesProps> = (props): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(props.value);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <GenreItemStyled
      key={props.genre.genreId}
      htmlFor={props.genre.name}
    >
      <div onClick={() => props.changeGenre(props.genre.name)} className="genre-checkbox__block">
        <input
          type="checkbox"
          name={props.genre.name}
          checked={props.value}
          id={props.genre.name}
          onChange={handleChange}
          hidden
        />

        <div
          className={`genre-checkbox__item ${
            props.value ? 'checked' : 'unchecked'
          }`}
        ></div>

        <p className="genre-checkbox__name">{props.genre.name}</p>
      </div>
    </GenreItemStyled>
  );
};

export { GenreItem };
