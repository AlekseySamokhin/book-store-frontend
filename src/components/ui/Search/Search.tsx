import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { icons } from '@/assets';

import { SearchStyled } from './Search.styles';

interface ITypeProps {
  className?: string;
}

const Search: React.FC<ITypeProps> = (props) => {
  const [text, setText] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (text) {
      searchParams.set('search', text);
      setSearchParams(searchParams);

      setText(text);
    }
  }, [text]);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);

    searchParams.set('search', text);
    setSearchParams(searchParams);

    if (!event.target.value) {
      setSearchParams({});
    }
  };

  const handleResetText = () => {
    setText('');
    searchParams.delete('search');
    setSearchParams({});
  };

  return (
    <SearchStyled className={props.className}>
      <img
        className="search__icon"
        src={icons.search}
        alt="Icon search"
      />

      <input
        onChange={handleChangeInput}
        className="search__input"
        value={text}
        type="search"
        placeholder="Search"
      />

      {text && (
        <img
          onClick={handleResetText}
          className="search__icon_clear"
          src={icons.close}
          alt="Icon clear"
        />
      )}
    </SearchStyled>
  );
};

export { Search };
