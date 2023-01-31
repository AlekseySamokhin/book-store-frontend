/* eslint-disable no-console */
import { useSearchParams } from 'react-router-dom';

import { PanelFiltersStyled } from './PanelFilters.styles';

import { DropDown } from '@/components/ui';

import { FilterByGenres, SortByOther, FilterByPrice } from './components';

const PanelFilters: React.FC = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const currentSortName = searchParams.get('sort') || 'price';

  return (
    <PanelFiltersStyled>
      <DropDown title="Genre">
        <FilterByGenres />
      </DropDown>
      <DropDown title="Price">
        <FilterByPrice />
      </DropDown>
      <DropDown title={`Sort by ${currentSortName.toLowerCase()}`}>
        <SortByOther />
      </DropDown>
    </PanelFiltersStyled>
  );
};

export { PanelFilters };
