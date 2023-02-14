import { Link } from 'react-router-dom';

import { logos } from '@/assets';

import { LogoStyled } from './Logo.styles';

interface ITypeProps {
  position: string;
  className?: string;
}

const Logo: React.FC<ITypeProps> = (props) => {
  const isHeaderPosition = props.position === 'header';

  return (
    <LogoStyled className={props.className}>
      <Link className='logo__link' to="/">
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
