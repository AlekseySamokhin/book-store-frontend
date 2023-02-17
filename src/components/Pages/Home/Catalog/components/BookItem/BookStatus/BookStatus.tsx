import { BookStatusStyled } from './BookStatus.styles';

interface ITypeProps {
  className?: string;
  isNew: boolean;
  isBestseller: boolean;
}

const BookStatus: React.FC<ITypeProps> = (props) => {
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
