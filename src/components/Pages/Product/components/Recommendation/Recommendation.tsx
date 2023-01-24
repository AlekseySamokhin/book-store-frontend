import { ReccommendationStyled } from './Recommendation.styles';

interface ITypesProps {
  className?: string;
}

const Recommendation: React.FC<ITypesProps> = (props): JSX.Element => {
  return (
    <ReccommendationStyled className={props.className}>
      <h3 className="reccommendations__title">Reccomentations</h3>
    </ReccommendationStyled>
  );
};

export { Recommendation };
