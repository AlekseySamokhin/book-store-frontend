import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { icons } from '@/assets';

import { SearchStyled } from './Search.styled';

interface ITypeProps {
  className?: string;
}

const Search: React.FC<ITypeProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [text, setText] = useState<string>('');

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

  const handleReset = () => {
    setText('');
    searchParams.delete('search');
    setSearchParams({});
  };

  //  const handleResetText = () => {
  //    setText('');
  //    setSearchParams({});
  //  };

  return (
    <SearchStyled className={props.className}>
      <img
        className="search__icon"
        src={icons.search}
        alt="Icon search input"
      />
      <input
        className="search__input"
        value={text}
        onChange={handleChangeInput}
        type="search"
        placeholder="Search"
      />

      {text && (
        <img
          onClick={handleReset}
          className="search__icon_clear"
          src={icons.close}
          alt="Icon clear input"
        />
      )}
    </SearchStyled>
  );
};

export { Search };
