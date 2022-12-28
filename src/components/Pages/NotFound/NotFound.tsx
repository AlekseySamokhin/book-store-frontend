import { Link } from 'react-router-dom';

import Container from '../../styles/Container';

const NotFound = () => {
  return (
    <Container>
      <div>Not Found Page</div>
      <Link to="/">Back to Home</Link>
    </Container>
  );
};

export default NotFound;
