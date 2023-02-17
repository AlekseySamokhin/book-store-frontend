import { Link } from 'react-router-dom';

import { Button } from '@/components/ui';
import { FlexStyled } from '@/components/styles';

import { images } from '@/assets';

import { AuthBannerStyled } from './AuthBanner.styles';

interface ITypeProps {
  className?: string;
}

const AuthBanner: React.FC<ITypeProps> = (props) => {
  return (
    <AuthBannerStyled className={props.className}>
      <img
        className="auth-banner__image"
        src={images.authBannerCastle}
        alt="Image authorization image"
      />

      <div className="auth-banner__block">
        <h2 className="auth-banner__title ">Authorize now</h2>

        <p className="auth-banner__description">
          Authorize now and discover the fabulous <br /> world of books
        </p>

        <img
          className="auth-banner__image-fairy"
          src={images.authBannerFairy}
          alt="Image authorization image"
        />

        <FlexStyled>
          <Link to="/signin">
            <Button className='auth-banner__button'>Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button className='auth-banner__button'>Sign Up</Button>
          </Link>
        </FlexStyled>
      </div>
    </AuthBannerStyled>
  );
};

export { AuthBanner };
