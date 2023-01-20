import { CartItemStyled } from './CartItem.styles';

import { icons, images } from '../../../../assets';

const CartItem: React.FC = (): JSX.Element => {
  return (
    <CartItemStyled>
      <div className="cart-item__content">
        <img className="cart-item__image" src={images.bookItemExample} />
        <div className="cart-item__info">
          <h4 className="cart-item__title">The Weight of Things</h4>
          <p className="cart-item__author">Marianne Flitz</p>
          <div className="cart-item__buttons">
            <div className="cart-item__counter">
              <div className="cart-item__button">-</div>1
              <div className="cart-item__button">+</div>
            </div>
            <img src={icons.iconDelete} className="cart-item__delete" />
          </div>
          <p className="cart-item__price">$14.99 USD</p>
        </div>
      </div>
      <div className="cart-item_line"></div>
    </CartItemStyled>
  );
};

export { CartItem };
