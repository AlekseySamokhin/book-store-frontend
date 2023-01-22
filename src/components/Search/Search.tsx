import { icons } from '../../assets';
import { SearchStyled } from './Search.styled';

interface ITypesProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const Search: React.FC<ITypesProps> = (props): JSX.Element => {
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    props.setSearchValue(event.target.value);
  };

  return (
    <SearchStyled>
      <img
        className="search__icon"
        src={icons.search}
        alt="Icon search input"
      />
      <input
        className="search__input"
        value={props.searchValue}
        onChange={(e) => handleChangeInput(e)}
        type="search"
        placeholder="Search"
      />

      {props.searchValue && (
        <img
          onClick={() => props.setSearchValue('')}
          className="search__icon_clear"
          src={icons.close}
          alt="Icon clear input"
        />
      )}
    </SearchStyled>
  );
};

export { Search };
