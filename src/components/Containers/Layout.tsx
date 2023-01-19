import { Outlet } from 'react-router-dom';

import { Header, Footer } from '.';

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