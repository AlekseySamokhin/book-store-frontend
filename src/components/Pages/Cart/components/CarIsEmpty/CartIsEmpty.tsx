import { Link } from 'react-router-dom';

import { Button } from '@/components/ui';
import { images } from '@/assets';

import { CartIsEmptyStyled } from './CartIsEmpty.styles';

const CartIsEmpty: React.FC = () => {
  return (
    <CartIsEmptyStyled>
      <img
        className="cart-is-empty__image"
        src={images.cartPageEmptyList}
        alt="Image cart is empty"
      />

      <div className="cart-is-empty__text">
        <h2 className="cart-is-empty__title">Your cart is empty</h2>

        <p className="cart-is-empty__description">
          Add items to cart to make a purchase. Go to the catalogue no.
        </p>

        <Link to="/">
          <Button className="cart-is-empty__button">Go to catalog</Button>
        </Link>
      </div>
    </CartIsEmptyStyled>
  );
};

export { CartIsEmpty };
