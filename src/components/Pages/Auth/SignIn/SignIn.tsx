import { useLocation } from 'react-router-dom';

import Container from '../../../styles/Container';

import imageMan from '../../../../assets/one-man.png';

import { SignInStyled } from './SignIn.styled';

const SignIn = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/';
  // eslint-disable-next-line no-console
  console.log(fromPage);

  return (
    <Container>
      <SignInStyled>
        <h1>Log In</h1>
        <img src={imageMan} alt="Image one man" />
      </SignInStyled>
    </Container>
  );
};

export default SignIn;
