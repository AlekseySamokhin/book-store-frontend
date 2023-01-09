import { Outlet } from 'react-router-dom';

import Header from './Containers/Header';
import Footer from './Containers/Footer';

const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export { Layout };
