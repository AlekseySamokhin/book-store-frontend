import { Button, FiveStarsRating } from '@/components/ui';

import { StarRating, Title, RateThisBook, Description } from './components';

import { ProductInfoStyled } from './ProductInfo.styles';

interface ITypesDataBook {
  book: {
    bookId: string;
    title: string;
    author: string;
    price: number;
    description: string;
    averageRating: number;
  } | null;
}

const ProductInfo: React.FC<ITypesDataBook> = (props): JSX.Element => {
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

      <div className="product__item_rating">
        <StarRating
          className="product__item_rating_star"
          averageRating={props.book?.averageRating || 0}
        />

        <FiveStarsRating
          className="product__item_rating_five_star"
          value={props.book?.averageRating || 0}
          bookId={props.book?.bookId || ''}
          readOnly={false}
        />

        <RateThisBook />
      </div>

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
