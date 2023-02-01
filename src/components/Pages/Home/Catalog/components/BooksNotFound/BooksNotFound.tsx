import { ContainerStyled } from '@/components/styles';

import { BooksNotFoundStyled } from './BooksNotFound.styles';

const BooksNotFound = () => {
  return (
    <ContainerStyled>
      <BooksNotFoundStyled>
        <h2 className='books-not-found__title'>OOPS! :'(</h2>
        <p className='books-not-found__message'>Books with this filters are currently out of stock!</p>
      </BooksNotFoundStyled>
    </ContainerStyled>
  );
};

export { BooksNotFound };
