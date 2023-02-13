/* eslint-disable no-console */
import type { ITypeCartUser } from '@/interfaces/userInterfaces';
import { icons } from '@/assets';

import { cartService } from '@/api/services';

import { CartItemStyled } from './CartItem.styles';

interface ITypeProps {
  book: ITypeCartUser;
}

const CartItem: React.FC<ITypeProps> = (props) => {
  const handleDeleteFromCartBook = async () => {
    await cartService.deleteCartBook({
      cartId: Number(props.book.id),
    });
  };

  const handleIncreaseNumberBook = async () => {
    let count = Number(props.book.count);

    ++count;

    await cartService.changeQtyBooksCart({
      cartId: Number(props.book.id),
      count: Number(count),
    });
  };

  const handleReduceNumberBook = async () => {
    let count = Number(props.book.count);

    --count;

    if (count < 1) {
      await cartService.deleteCartBook({ cartId: Number(props.book.id) });

      return;
    }

    await cartService.changeQtyBooksCart({
      cartId: Number(props.book.id),
      count: Number(count),
    });
  };

  return (
    <CartItemStyled>
      <div className="cart-item__content">
        <img className="cart-item__image" src={props.book.book.poster} />
        <div className="cart-item__info">
          <h4 className="cart-item__title">{props.book.book.title}</h4>
          <p className="cart-item__author">{props.book.book.author}</p>
          <div className="cart-item__buttons">
            <div className="cart-item__counter">
              <div
                onClick={handleReduceNumberBook}
                className="cart-item__button"
              >
                -
              </div>
              {props.book.count}
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
          <p className="cart-item__price">$ {(props.book.book.price * Number(props.book.count)).toFixed(2)} USD</p>
        </div>
      </div>
      <div className="cart-item_line"></div>
    </CartItemStyled>
  );
};

export { CartItem };
