import { useState } from 'react';

import { icons } from '../../../assets';
import { SearchStyled } from './Search.styled';

const Search: React.FC = (): JSX.Element => {
  const [text, setText] = useState<string>('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setText(event.target.value);
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
        value={text}
        onChange={(e) => handleChangeInput(e)}
        type="search"
        placeholder="Search"
      />

      {text && (
        <img
          onClick={() => setText('')}
          className="search__icon_clear"
          src={icons.close}
          alt="Icon clear input"
        />
      )}
    </SearchStyled>
  );
};

export { Search };
