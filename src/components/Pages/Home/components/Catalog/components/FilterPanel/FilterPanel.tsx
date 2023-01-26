import { FilterPanelStyled } from './FilterPanel.styles';

import { Select } from '@/components/ui';
import { GenreCheckboxes } from './components';

const FilterPanel: React.FC = (): JSX.Element => {
  return (
    <FilterPanelStyled>
      <Select className="filter-panel__item" title="Genre">
        <GenreCheckboxes />
      </Select>
      <Select className="filter-panel__item" title="Price"></Select>
      <Select className="filter-panel__item" title="Sort by price"></Select>
    </FilterPanelStyled>
  );
};

export { FilterPanel };
