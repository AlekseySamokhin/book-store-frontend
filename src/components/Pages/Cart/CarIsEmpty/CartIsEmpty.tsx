import { Button } from '../../../ui';
import { CartIsEmptyStyled } from './CartIsEmpty.styles';

import { images } from '../../../../assets';

const CartIsEmpty: React.FC = (): JSX.Element => {
  return (
    <CartIsEmptyStyled>
      <img
        className="cart-is-empty__image"
        src={images.cartPageEmptyList}
        alt="Image cart is empty"
      />

      <div className='cart-is-empty__text'>
        <h2 className="cart-is-empty__title">Your cart is empty</h2>
        <p className="cart-is-empty__description">
          Add items to cart to make a purchase. <br /> Go to the catalogue no.
        </p>

        <Button className="cart-is-empty__button">Go to catalog</Button>
      </div>
    </CartIsEmptyStyled>
  );
};

export { CartIsEmpty };
