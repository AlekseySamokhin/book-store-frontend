import { CheckAuth } from '../../Containers';

import { Comments, Recommendation, ProductItem } from './components';
import { AuthBanner } from '../../ui';

import { Container } from '../../../styles/Container';
import { ProductStyled } from './Product.styles';

const Product: React.FC = (): JSX.Element => {
  return (
    <Container>
      <ProductStyled>
        <ProductItem className="product__item" />

        <Comments className="product__comments" />

        <CheckAuth needAuth={false}>
          <AuthBanner />
        </CheckAuth>

        <Recommendation className="product__recommendation" />
      </ProductStyled>
    </Container>
  );
};

export { Product };
