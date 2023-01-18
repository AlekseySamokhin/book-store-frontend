import { CustomSelect } from '../CustomSelect';
import { CatalogStyled } from './Catalog.styles';

const Catalog: React.FC = (): JSX.Element => {
  return (
    <CatalogStyled>
      <div className="catalog__header">
        <h2 className="catalog__header_title">Catalog</h2>
        <div className="catalog__header_select">
          <CustomSelect title="Genre" />
          <CustomSelect title="Price" />
          <CustomSelect title="Sort by price" />
        </div>
      </div>
    </CatalogStyled>
  );
};

export { Catalog };
