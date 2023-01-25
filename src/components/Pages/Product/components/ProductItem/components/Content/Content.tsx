import { ContentStyled } from './Content.styles';

import { icons } from '../../../../../../../assets';

import { StarRating, Button } from '../../../../../../ui';

interface ITypesDataBook {
  bookId: string;
  title: string;
  author: string;
  price: number;
  description: number;
  rate?: number;
}

interface ITypesProps {
  book: ITypesDataBook | null;
}

const Content: React.FC<ITypesProps> = (props): JSX.Element => {
  return (
    <ContentStyled>
      <h2 className="product__item_title">{props.book?.title}</h2>
      <h4 className="product__item_author">{props.book?.author}</h4>
      <div className="product__item_rating">
        <div className="product__item_rating_count">
          <img
            className="product__item_rating_star"
            src={icons.starShared}
            alt="Icons star shared"
          />
          <span className="product__item_rating_number">
            {props.book?.rate}.0
          </span>
        </div>

        <div className="product__item_rating_stars">
          <StarRating rate={Number(props.book?.rate)} />
          <div className="product__item_rating_stars_arrow">
            <img
              className="product__item_rating_stars_arrow_icon"
              src={icons.arrowBack}
              alt="Icon arrow back"
            />

            <span className="product__item_rating_stars_arrow_text">
              Rate this book
            </span>
          </div>
        </div>
      </div>
      <div className="product__item_description">
        <h5 className="product__item_description_title">Description</h5>
        <p className="product__item_description_text">
          {props.book?.description}
        </p>
      </div>
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
    </ContentStyled>
  );
};

export { Content };
