/* eslint-disable no-console */
// import { useSearchParams } from 'react-router-dom';

import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SortByOtherStyled } from './SortByOther.styles';

interface ITypeProps {
  sorting: { id: number; name: string }[];
}

const SortByOther: React.FC<ITypeProps> = (props): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchParams.set('sort', '1');
    setSearchParams(searchParams);
  }, []);

  const currentSort = props.sorting.find(
    (item) => item.id.toString() === (searchParams.get('sort')),
  );

  const handleChangeSort = (sortId: number) => {
    if (currentSort?.id === sortId) {
      searchParams.delete('sort');
      setSearchParams({});

      return;
    }

    searchParams.set('sort', sortId.toString());

    setSearchParams(searchParams);
  };

  return (
    <SortByOtherStyled>
      <ul className="sort-by-other__list">
        {props.sorting.map((sort, index) => (
          <li
            onClick={() => handleChangeSort(sort.id)}
            key={sort.id}
            className={`sort-by-other__list_item ${
              currentSort?.id === index + 1 &&
              'sort-by-other__list_item--active'
            }`}
          >
            {sort.name}
          </li>
        ))}
      </ul>
    </SortByOtherStyled>
  );
};

export { SortByOther };
