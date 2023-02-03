/* eslint-disable no-console */
import { GenreStyled } from './Genre.styles';

interface ITypeProps {
  genre: {
    genreId: number;
    name: string;
  };

  checked: boolean;
  changeGenre: (id: number) => void;
}

const Genre: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <GenreStyled htmlFor={props.genre.name}>
      <div onClick={() => props.changeGenre(props.genre.genreId)} className="genre-checkbox__block">
        <input
          type="checkbox"
          name={props.genre.name}
          checked={props.checked}
          id={props.genre.name}
          onChange={() => props.changeGenre(props.genre.genreId)}
          hidden
        />

        <div
          className={`genre-checkbox__item ${
            props.checked ? 'checked' : 'unchecked'
          }`}
        ></div>

        <p className="genre-checkbox__name">{props.genre.name}</p>
      </div>
    </GenreStyled>
  );
};

export { Genre };
