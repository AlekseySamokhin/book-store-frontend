import { FilterPanelStyled } from './FilterPanel.styles';

import { Select } from '../../../../../../ui';
import { GenreCheckboxes } from './components';

const FilterPanel: React.FC = (): JSX.Element => {
  return (
    <FilterPanelStyled>
      <Select title="Genre">
        <GenreCheckboxes />
      </Select>
      <Select title="Price"></Select>
      <Select title="Sort by price"></Select>
    </FilterPanelStyled>
  );
};

export { FilterPanel };
