/* eslint-disable no-console */
import { useMemo } from 'react';

import { Container } from '@/components/styles';
import { Button } from '../../ui';

import { useAppSelector } from '@/redux/store';

import { CartIsEmpty } from './CarIsEmpty';

import { CartStyled } from './Cart.styles';
import { CartItem } from './CartItem';
import type { ITypeCartUser } from '@/interfaces/userInterfaces';

const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.auth.cart);

  const getTotalAmount = (array: ITypeCartUser[]) => {
    const arrayPrices = [] as number[];

    array.forEach((item) => {
      arrayPrices.push(item.book.price);
    });

    let totalAmount = 0;

    arrayPrices.forEach((item) => {
      totalAmount += item;
    });

    return totalAmount;
  };

  const totalAmount = useMemo(() => getTotalAmount(cart), [cart]);

  return (
    <Container>
      {cart.length ? (
        <CartStyled>
          <div className="cart__list">
            {cart.map((cartItem) => (
              <CartItem key={cartItem.id} book={cartItem} />
            ))}
          </div>
          <p className="cart__total">
            Total: <span>{totalAmount} $</span>
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
