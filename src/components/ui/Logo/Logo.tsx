import { Link } from 'react-router-dom';
import { logos } from '../../../assets';

import { LogoStyled } from './Logo.styles';

interface ITypesProps {
  position: string;
}

const Logo: React.FC<ITypesProps> = (props): JSX.Element => {
  const isHeaderPosition = props.position === 'header';

  return (
    <LogoStyled>
      <Link to="/">
        <img
          className="logo__image"
          src={isHeaderPosition ? logos.logoHeader : logos.logoFooter}
          alt="Logo header"
        />
      </Link>
    </LogoStyled>
  );
};

export { Logo };
