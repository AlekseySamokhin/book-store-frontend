import { Link } from 'react-router-dom';

import { Button } from '../../UI';
import { AuthBannerStyled } from './AuthBanner.styles';
import { images } from '../../../assets';
import { Flex } from '../../../styles/Flex';

const AuthBanner: React.FC = (): JSX.Element => {
  return (
    <AuthBannerStyled>
      <img
        className="auth-banner__image"
        src={images.authBannerCastle}
        alt="Image authorization image"
      />
      <div className="auth-banner__block">
        <h2 className="auth-banner__title">Authorize now</h2>
        <p className="auth-banner__description">
          Authorize now and discover the fabulous <br /> world of books
        </p>
        <img
          className="auth-banner__image-fairy"
          src={images.authBannerFairy}
          alt="Image authorization image"
        />
        <Flex>
          <Link to="signin">
            <Button>Sign In</Button>
          </Link>
          <Link to="signup">
            <Button>Sign Up</Button>
          </Link>
        </Flex>
      </div>
    </AuthBannerStyled>
  );
};

export { AuthBanner };
