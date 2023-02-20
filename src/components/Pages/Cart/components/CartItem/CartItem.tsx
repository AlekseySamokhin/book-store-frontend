import { cartService } from '@/api/services';

import { icons } from '@/assets';
import type { ITypeCartUser } from '@/interfaces/userInterfaces';

import { CartItemStyled } from './CartItem.styles';

interface ITypeProps {
  cartItem: ITypeCartUser;
  index: number;
}

const CartItem: React.FC<ITypeProps> = (props) => {
  const handleDeleteFromCartBook = async () => {
    await cartService.deleteCartBook({
      cartId: Number(props.cartItem.id),
    });
  };

  const handleIncreaseNumberBook = async () => {
    let count = Number(props.cartItem.count);

    ++count;

    await cartService.changeQtyBooksCart({
      cartId: Number(props.cartItem.id),
      count: Number(count),
    });
  };

  const handleReduceNumberBook = async () => {
    let count = Number(props.cartItem.count);

    --count;

    if (count < 1) {
      await cartService.deleteCartBook({ cartId: Number(props.cartItem.id) });

      return;
    }

    await cartService.changeQtyBooksCart({
      cartId: Number(props.cartItem.id),
      count: Number(count),
    });
  };

  return (
    <CartItemStyled>
      {props.index > 0 && <div className="cart-item__line"></div>}

      <div className="cart-item__content">
        <img className="cart-item__image" src={props.cartItem.book.poster} />

        <div className="cart-item__info">
          <h4 className="cart-item__title">{props.cartItem.book.title}</h4>

          <p className="cart-item__author">{props.cartItem.book.author}</p>

          <div className="cart-item__buttons">
            <div className="cart-item__counter">
              <div
                onClick={handleReduceNumberBook}
                className="cart-item__button"
              >
                -
              </div>
              {props.cartItem.count}
              <div
                onClick={handleIncreaseNumberBook}
                className="cart-item__button"
              >
                +
              </div>
            </div>

            <img
              onClick={handleDeleteFromCartBook}
              src={icons.iconDelete}
              className="cart-item__delete"
            />
          </div>
          <p className="cart-item__price">
            $ {(props.cartItem.book.price * Number(props.cartItem.count)).toFixed(2)} USD
          </p>
        </div>
      </div>
    </CartItemStyled>
  );
};

export { CartItem };
