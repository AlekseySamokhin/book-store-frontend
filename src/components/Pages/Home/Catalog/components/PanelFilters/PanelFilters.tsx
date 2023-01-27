import { PanelFiltersStyled } from './PanelFilters.styles';

import { Select } from '@/components/ui';
import { SortByGenres } from './components';

const PanelFilters: React.FC = (): JSX.Element => {
  return (
    <PanelFiltersStyled>
      <Select title="Genre">
        <SortByGenres />
      </Select>
      <Select title="Price"></Select>
      <Select title="Sort by price"></Select>
    </PanelFiltersStyled>
  );
};

export { PanelFilters };
