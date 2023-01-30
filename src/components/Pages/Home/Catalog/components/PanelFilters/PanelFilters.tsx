import { PanelFiltersStyled } from './PanelFilters.styles';

import { Select } from '@/components/ui';
import { SortByGenres, SortByPrice } from './components';

const PanelFilters: React.FC = (): JSX.Element => {
  return (
    <PanelFiltersStyled>
      <Select title="Genre">
        <SortByGenres />
      </Select>
      <Select title="Price">
        <SortByPrice />
      </Select>
      <Select title="Sort by price"></Select>
    </PanelFiltersStyled>
  );
};

export { PanelFilters };
