import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '@/redux/store';
import { userThunks } from '@/redux/users/thunks';

import { CartIsEmpty, CartItem } from './components';
import { Button } from '@/components/ui';
import { Container } from '@/components/styles';
import type { ITypeCartUser } from '@/interfaces/userInterfaces';

import { CartStyled } from './Cart.styles';

const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.auth.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        dispatch(userThunks.getCart());
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, []);

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
      {cart.length !== 0 ? (
        <CartStyled>
          <div className="cart__list">
            {cart.map((cartItem, index) => (
              <CartItem index={index} key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
          <p className="cart__total">
            Total:
            <span className="cart__total_price"> {totalAmount.toFixed(2)}</span>
          </p>
          <div className="cart__buttons">
            <Link className="cart__buttons_link" to="/">
              <Button className="cart__button" outlined>
                Continue shopping
              </Button>
            </Link>
            <Link className="cart__buttons_link" to="/">
              <Button className="cart__button">Checkout</Button>
            </Link>
          </div>
        </CartStyled>
      ) : (
        <CartIsEmpty />
      )}
    </Container>
  );
};

export { Cart };
