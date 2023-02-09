import { Container } from '@/components/styles';
import { Button } from '../../ui';

import { CartIsEmpty } from './CarIsEmpty';

import { CartStyled } from './Cart.styles';
import { CartItem } from './CartItem';

const boolean = true;

const Cart: React.FC = (): JSX.Element => {
  return (
    <Container>
      {boolean ? (
        <CartStyled>
          <div className="cart__list">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <p className="cart__total">
            Total: <span>34.98</span>
          </p>
          <div className="cart__buttons">
            <Button>Continue shopping</Button>
            <Button>Checkout</Button>
          </div>
        </CartStyled>
      ) : (
        <CartIsEmpty />
      )}
    </Container>
  );
};

export { Cart };
