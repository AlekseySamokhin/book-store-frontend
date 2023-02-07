/* eslint-disable no-console */
import { Button } from '@/components/ui';

import { Title, Description, Rating } from './components';

import type { ITypeDataBook } from '@/interfaces/bookInterfaces';

import { ProductInfoStyled } from './ProductInfo.styles';

interface ITypeProps {
  book: ITypeDataBook | null;
  personalRating: number;
}

const ProductInfo: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <ProductInfoStyled>
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

          <Button className="product__item_button">
            ${props.book?.price} USD
          </Button>
        </div>
      </div>
    </ProductInfoStyled>
  );
};

export { ProductInfo };
