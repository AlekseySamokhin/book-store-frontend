import { Select } from '../../../../UI';
import { BookItem } from '../BookItem';

import { CatalogStyled } from './Catalog.styles';

const Catalog: React.FC = (): JSX.Element => {
  return (
    <CatalogStyled>
      <div className="catalog__header">
        <h2 className="catalog__header_title">Catalog</h2>
        <div className="catalog__header_select">
          <Select title="Genre" />
          <Select title="Price" />
          <Select title="Sort by price" />
        </div>
      </div>
      <div className="catalog__list">
        <BookItem />
      </div>
    </CatalogStyled>
  );
};

export { Catalog };
