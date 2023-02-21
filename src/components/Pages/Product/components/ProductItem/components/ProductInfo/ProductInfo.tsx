import { useMemo } from 'react';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '@/redux/store';
import { userThunks } from '@/redux/users/thunks';
import { cartService } from '@/api/services';

import { Button } from '@/components/ui';
import { Title, Description, Rating } from './components';

import type { ITypeDataBook } from '@/interfaces/bookInterfaces';
import type { ITypeCartUser } from '@/interfaces/userInterfaces';

import { ProductInfoStyled } from './ProductInfo.styles';

interface ITypeProps {
  book: ITypeDataBook | null;
  personalRating: number;
}

const ProductInfo: React.FC<ITypeProps> = (props) => {
  const cart = useAppSelector((store) => store.auth.cart);
  const dispatch = useAppDispatch();

  const checkForCart = (array: ITypeCartUser[]) => {
    const arrayIdBooks = array.map((item) => item.book.bookId);

    return arrayIdBooks.includes(props.book?.bookId || '0');
  };

  const hasCart = useMemo(() => checkForCart(cart), [cart, props.book?.bookId]);

  const handleAddCartBook = async () => {
    try {
      await cartService.addCartBook({ bookId: Number(props.book?.bookId) });

      dispatch(userThunks.getCart()).unwrap();
    } catch (err) {
      toast.error((err as { message: string }).message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <ProductInfoStyled>
      <div className="product__info_block">
        <Title
          className="product__item_name"
          variant="h2"
          text={props.book?.title || ''}
        />

        <Title
          className="product__item_author"
          variant="h3"
          text={props.book?.author || ''}
        />

        <Rating
          className="product__item_rating"
          personalRating={props.personalRating}
          averageRating={props.book?.averageRating || 0}
          bookId={props.book?.bookId || ''}
        />
      </div>

      <div className="product__info_text">
        <Description
          className="product__item_description"
          description={props.book?.description || ''}
        />

        <div className="product__item_buttons">
          <div className="product__item_buttons_paperback">
            <span className="product__item_buttons_title">PaperBack</span>
            <Button disabled={true} className="product__item_button">
              Not available
            </Button>
          </div>
          <div className="product__item_buttons_hardcover">
            <span className="product__item_buttons_title">Hardcover</span>
            {hasCart ? (
              <Button className="product__item_button" outlined={hasCart}>
                {hasCart ? 'Added to cart' : `${props.book?.price} USD`}
              </Button>
            ) : (
              <Button
                onClick={handleAddCartBook}
                className="product__item_button"
              >
                $ {props.book?.price} USD
              </Button>
            )}
          </div>
        </div>
      </div>
    </ProductInfoStyled>
  );
};

export { ProductInfo };
