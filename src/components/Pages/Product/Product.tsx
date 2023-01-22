/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { bookThunks } from '../../../redux/books/bookThunks/bookThunks';

import { useAppDispatch } from '../../../redux/store';
import Container from '../../../styles/Container';

import { ProductStyled } from './Product.styles';

import type { ITypesDataBook } from '../../../api/services/book.service';
import { Button } from '../../UI';

const Product: React.FC = (): JSX.Element => {
  const [book, setBook] = useState<ITypesDataBook | null>(null);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { id } = useParams();

  console.log(book);

  console.log(typeof id);

  console.log(location, id);

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
            <div className="product__item_description">
              <h5 className="product__item_description_title">Description</h5>
              <p className="product__item_description_text">
                {book?.description}
              </p>
            </div>

            <div className="product__item_buttons">
              <div className="product__item_buttons_paperback">
                <span className="product__item_buttons_title">PaperBack</span>
                <Button disabled={true} className='product__item_button'>Not available</Button>
              </div>
              <div className="product__item_buttons_hardcover">
                <span className="product__item_buttons_title">Hardcover</span>
                <Button className='product__item_button'>${book?.price} USD</Button>
              </div>
            </div>
          </div>
        </div>
      </ProductStyled>
    </Container>
  );
};

export { Product };
