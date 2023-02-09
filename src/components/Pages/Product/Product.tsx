import { CheckAuth } from '@/components/Containers';
import { AuthBanner } from '@/components/ui';
import { Container } from '@/components/styles';

import { Comments, Recommendation, ProductItem } from './components';

import { ProductStyled } from './Product.styles';

const Product: React.FC = (): JSX.Element => {
  return (
    <Container>
      <ProductStyled>
        <ProductItem className="product__item" />

        <Comments className="product__comments" />

        <CheckAuth needAuth={false}>
          <AuthBanner className='product__auth_banner' />
        </CheckAuth>

        <Recommendation className="product__recommendation" />
      </ProductStyled>
    </Container>
  );
};

export { Product };
