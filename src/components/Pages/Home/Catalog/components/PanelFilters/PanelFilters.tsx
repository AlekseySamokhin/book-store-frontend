/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { PanelFiltersStyled } from './PanelFilters.styles';

import { DropDown } from '@/components/ui';

import { FilterByGenres, SortByOther, FilterByPrice } from './components';

const sorting: { id: number; name: string }[] = [
  { id: 1, name: 'Price' },
  { id: 2, name: 'Name' },
  { id: 3, name: 'Author name' },
  { id: 4, name: 'Rating' },
  { id: 5, name: 'Date of issue' },
];

const PanelFilters: React.FC = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const [activeSort, setActiveSort] = useState<string>('price');

  const curSort = searchParams.get('sort') || '1';

  useEffect(() => {
    const currentSort = sorting.find(
      (sort) => sort.id === Number(curSort),
    );

    if (currentSort) {
      setActiveSort(currentSort.name.toLowerCase());
    }
  }, [searchParams]);

  return (
    <PanelFiltersStyled>
      <DropDown title="Genre">
        <FilterByGenres />
      </DropDown>
      <DropDown title="Price">
        <FilterByPrice />
      </DropDown>
      <DropDown title={`Sort by ${activeSort}`}>
        <SortByOther sorting={sorting} />
      </DropDown>
    </PanelFiltersStyled>
  );
};

export { PanelFilters };
