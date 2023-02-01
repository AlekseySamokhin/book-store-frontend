/* eslint-disable no-console */
// import { useSearchParams } from 'react-router-dom';

import { useSearchParams } from 'react-router-dom';

import { SortByOtherStyled } from './SortByOther.styles';

const arrNamesSort: string[] = [
  'Price',
  'Name',
  'Author name',
  'Rating',
  'Date of issue',
];

const SortByOther: React.FC = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();

  const indexCurrentSort = arrNamesSort.indexOf(
    searchParams.get('sort') || 'Price',
  );

  const handleChangeSort = (nameSort: string) => {
    const currentSort = searchParams.get('sort');

    if (currentSort === nameSort) {
      searchParams.delete('sort');
      setSearchParams({});

      return;
    }

    searchParams.set('sort', nameSort);

    setSearchParams(searchParams);
  };

  return (
    <SortByOtherStyled>
      <ul className="sort-by-other__list">
        {arrNamesSort.map((nameSort, index) => (
          <li
            onClick={() => handleChangeSort(nameSort)}
            key={nameSort}
            className={`sort-by-other__list_item ${
              indexCurrentSort === index && 'sort-by-other__list_item--active'
            }`}
          >
            {nameSort}
          </li>
        ))}
      </ul>
    </SortByOtherStyled>
  );
};

export { SortByOther };
