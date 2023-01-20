/* eslint-disable no-console */
import { useParams } from 'react-router-dom';
import Container from '../../../styles/Container';

import { ProductStyled } from './Product.styles';

const Product = () => {
  // const location = useLocation();
  const id = useParams();

  console.log(id);

  return (
    <Container>
      <ProductStyled>Product {id.id}</ProductStyled>
    </Container>
  );
};

export { Product };
