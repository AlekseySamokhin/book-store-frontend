import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home Page</Link>
      <Link to="/signin">Sign in</Link>
      <Link to="/signup">Sign in</Link>
      <Link to="/profile">My Account</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Navigation;
