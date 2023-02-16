import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { DropDown } from '@/components/ui';
import { FilterByGenres, SortByOther, FilterByPrice } from './components';

import { PanelFiltersStyled } from './PanelFilters.styles';

interface ITypeProps {
  className?: string;
}

const sorting: { id: number; name: string }[] = [
  { id: 1, name: 'Price' },
  { id: 2, name: 'Name' },
  { id: 3, name: 'Author name' },
  { id: 4, name: 'Rating' },
  { id: 5, name: 'Date of issue' },
];

const PanelFilters: React.FC<ITypeProps> = (props) => {
  const [searchParams] = useSearchParams();
  const [sort, setSort] = useState('price');

  const curSort = searchParams.get('sort') || '1';

  useEffect(() => {
    const currentSort = sorting.find((sort) => sort.id === Number(curSort));

    if (currentSort) {
      setSort(currentSort.name.toLowerCase());
    }
  }, [searchParams]);

  return (
    <PanelFiltersStyled className={props.className}>
      <DropDown className="panel-filters__dropdown" title="Genre">
        <FilterByGenres />
      </DropDown>
      <DropDown className="panel-filters__dropdown" title="Price">
        <FilterByPrice />
      </DropDown>
      <DropDown className="panel-filters__dropdown" title={`Sort by ${sort}`}>
        <SortByOther sorting={sorting} />
      </DropDown>
    </PanelFiltersStyled>
  );
};

export { PanelFilters };
