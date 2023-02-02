import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { booksService } from '@/api/services';
import type { ITypesDataBook } from '@/interfaces/bookInterfaces';

import { Poster, ProductInfo } from './components';

import { ProductItemStyled } from './Product.styles';

interface ITypesProps {
  className?: string;
}

const ProductItem: React.FC<ITypesProps> = (props): JSX.Element => {
  const [book, setBook] = useState<ITypesDataBook | null>(null);
  const { id } = useParams<string>();

  useEffect(() => {
    try {
      (async () => {
        const dataBook = await booksService.getOneBook({ id: Number(id) });

        setBook(dataBook);
      })();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, []);

  return (
    <ProductItemStyled className={props.className}>
      <Poster className="product__item_poster" picture={book?.poster} />

      <ProductInfo book={book} />
    </ProductItemStyled>
  );
};

export { ProductItem };
