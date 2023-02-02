import { DescriptionStyled } from './Description.styles';

import { Title } from '../Title';

interface ITypeProps {
  description: string;
  className?: string;
}

const Description: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <DescriptionStyled className={props.className}>
      <Title className="description__title" variant="h4" text="Description" />

      <p className="description__text">{props.description}</p>
    </DescriptionStyled>
  );
};

export { Description };
