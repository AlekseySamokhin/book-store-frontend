import { PosterStyled } from './Poster.styles';

interface ITypesProps {
  className?: string;
  picture?: string;
}

const Poster: React.FC<ITypesProps> = (props): JSX.Element => {
  return <PosterStyled className={props.className} src={props.picture} />;
};

export { Poster };
