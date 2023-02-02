/* eslint-disable no-console */
import { useState, useEffect } from 'react';

import { ReccommendationStyled } from './Recommendation.styles';
import { booksService } from '@/api/services';
import { BookItem } from '@/components/Pages/Home/Catalog/components';

import type { ITypesDataBook } from '@/interfaces/bookInterfaces';

interface ITypeProps {
  className?: string;
}

const Recommendation: React.FC<ITypeProps> = (props): JSX.Element => {
  const [recommendationBooks, setRecommendationBooks] = useState<ITypesDataBook[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const books = await booksService.getRecommendationBooks();

        setRecommendationBooks(books);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <ReccommendationStyled className={props.className}>
      <h3 className="reccommendations__title">Reccomendations</h3>
      <div className="reccommendations__books">
        {recommendationBooks.map((book) => (
          <BookItem key={book.bookId} book={book} />
        ))}
      </div>
    </ReccommendationStyled>
  );
};

export { Recommendation };
