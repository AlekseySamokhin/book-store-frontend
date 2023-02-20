import { PosterStyled } from './Poster.styles';

interface ITypeProps {
  className?: string;
  picture?: string;
}

const Poster: React.FC<ITypeProps> = (props) => {
  return <PosterStyled className={props.className} src={props.picture} />;
};

export { Poster };
