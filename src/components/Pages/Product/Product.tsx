/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { bookThunks } from '../../../redux/books/bookThunks/bookThunks';

import Container from '../../../styles/Container';

import { icons } from '../../../assets';

import { ProductStyled } from './Product.styles';

import type { ITypesDataBook } from '../../../api/services/book.service';
import { Button, StarRating } from '../../ui';
import { AuthBanner } from '../../Banner';
import { Comments } from './components/Comments';
import { Recommendations } from './components/Recommendations';

const Product: React.FC = (): JSX.Element => {
  const [book, setBook] = useState<ITypesDataBook | null>(null);
  const email = useAppSelector((state) => state.users.user.email);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  console.log(book);

  console.log(typeof id);

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(
          bookThunks.getOneBook(Number(id)),
        ).unwrap();

        setBook(response);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch]);

  return (
    <Container>
      <ProductStyled>
        <div className="product__item">
          <img
            className="product__item_poster"
            src={book?.poster}
            alt="Poster book"
          />

          <div className="product__item_info">
            <h2 className="product__item_title">{book?.title}</h2>
            <h4 className="product__item_author">{book?.author}</h4>

            <div className="product__item_rating">
              <div className="product__item_rating_count">
                <img
                  className="product__item_rating_star"
                  src={icons.starShared}
                  alt="Icons star shared"
                />
                <span className="product__item_rating_number">
                  {book?.rate}.0
                </span>
              </div>

              <div className="product__item_rating_stars">
                <StarRating rate={Number(book?.rate)} />
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
                {book?.description}
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
                  ${book?.price} USD
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Comments />

        {email ? <div>Comments</div> : <AuthBanner />}

        <Recommendations />
      </ProductStyled>
    </Container>
  );
};

export { Product };
