import { BookStatusStyled } from './BookStatus.styles';

interface ITypesProps {
  className?: string;
  isNew: boolean;
  isBestseller: boolean;
}

const BookStatus: React.FC<ITypesProps> = (props): JSX.Element => {
  return (
    <BookStatusStyled
      className={props.className}
      isNew={props.isNew}
      isBestseller={props.isBestseller}
    >
      {props.isNew ? 'New' : 'Bestseller'}
    </BookStatusStyled>
  );
};

export { BookStatus };
