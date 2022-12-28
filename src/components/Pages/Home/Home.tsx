import { useNavigate } from 'react-router-dom';

import Container from '../../styles/Container';

const Home = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Container>
      <div>Home Page</div>
      <button onClick={goBack}>Go back</button>
    </Container>
  );
};

export default Home;
