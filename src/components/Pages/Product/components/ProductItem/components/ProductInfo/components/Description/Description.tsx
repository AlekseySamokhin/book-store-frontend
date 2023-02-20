import { Title } from '../Title';

import { DescriptionStyled } from './Description.styles';

interface ITypeProps {
  description: string;
  className?: string;
}

const Description: React.FC<ITypeProps> = (props) => {
  return (
    <DescriptionStyled className={props.className}>
      <Title className="description__title" variant="h4" text="Description" />

      <p className="description__text">{props.description}</p>
    </DescriptionStyled>
  );
};

export { Description };
