/* eslint-disable no-console */
import { useEffect, useMemo } from 'react';

import { useAppSelector, useAppDispatch } from '@/redux/store';
import { userThunks } from '@/redux/users/thunks';

import { Button } from '@/components/ui';

import { CartIsEmpty, CartItem } from './components';

import type { ITypeCartUser } from '@/interfaces/userInterfaces';

import { Container } from '@/components/styles';
import { CartStyled } from './Cart.styles';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.auth.cart);

  useEffect(() => {
    (async () => {
      try {
        dispatch(userThunks.getCart());
      } catch (error) {
        console.log(error);
      }
    })();
  }, [cart]);

  const getTotalAmount = (array: ITypeCartUser[]) => {
    const arrayPrices = [] as number[];

    array.forEach((item) => {
      arrayPrices.push(item.book.price * Number(item.count));
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
            Total: <span>{totalAmount.toFixed(2)} $</span>
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
