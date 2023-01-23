import { StarStyled } from './Star.styles';
import { icons } from '../../../../assets';

interface ITypeProps {
  className: string;
  selected: boolean;
  onSelect: () => void;
}

const Star: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <StarStyled
      className={props.className}
      src={props.selected ? icons.starShared : icons.starTransparent}
      onClick={props.onSelect}
    />
  );
};

export { Star };
