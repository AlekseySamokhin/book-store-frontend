import { Title, Rating } from '../ProductInfo/components';

import { ProductHeaderStyled } from './ProductHeader.styles';

interface ITypeProps {
  bookId?: string;
  title?: string;
  author?: string;
  personalRating?: number;
  averageRating?: number;
  className?: string;
}

const ProductHeader: React.FC<ITypeProps> = (props) => {
  return (
    <ProductHeaderStyled className={props.className}>
      <Title
        className="product__item_name"
        variant="h2"
        text={props.title || ''}
      />

      <Title
        className="product__item_author"
        variant="h3"
        text={props.author || ''}
      />

      <Rating
        className="product__item_rating"
        personalRating={props.personalRating || 0}
        averageRating={props.averageRating || 0}
        bookId={props.bookId || ''}
      />
    </ProductHeaderStyled>
  );
};

export { ProductHeader };
