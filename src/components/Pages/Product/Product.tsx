import { CheckAuth } from '@/components/hoc';

import { Comments, Recommendation, ProductItem } from './components';
import { AuthBanner } from '../../ui';

import { ContainerStyled } from '@/components/styles';
import { ProductStyled } from './Product.styles';

const Product: React.FC = (): JSX.Element => {
  return (
    <ContainerStyled>
      <ProductStyled>
        <ProductItem className="product__item" />

        <Comments className="product__comments" />

        <CheckAuth needAuth={false}>
          <AuthBanner />
        </CheckAuth>

        <Recommendation className="product__recommendation" />
      </ProductStyled>
    </ContainerStyled>
  );
};

export { Product };
