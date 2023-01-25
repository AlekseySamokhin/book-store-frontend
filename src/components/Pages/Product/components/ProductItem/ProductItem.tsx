import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { booksService } from '../../../../../api/services';
import { Poster, Content } from './components';

import type { ITypesDataBook } from '../../../../../interfaces/bookInterfaces';

import { ProductItemStyled } from './Product.styles';

interface ITypesProps {
  className?: string;
}

const ProductItem: React.FC<ITypesProps> = (props): JSX.Element => {
  const [book, setBook] = useState<ITypesDataBook | null>(null);
  const { id } = useParams<string>();

  useEffect(() => {
    (async () => {
      const dataBook = await booksService.getOneBook({ id: Number(id) });

      setBook(dataBook);
    })();
  }, []);

  return (
    <ProductItemStyled className={props.className}>
      <Poster className="product__item_poster" picture={book?.poster} />

      <Content book={book} />
    </ProductItemStyled>
  );
};

export { ProductItem };
