import { useLocation } from 'react-router-dom';

import Container from '../../../styles/Container';

const SignIn = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/';

  return (
    <Container>
      <div>Sign In Page</div>
      {fromPage}
    </Container>
  );
};

export default SignIn;
