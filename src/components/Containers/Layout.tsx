import { Outlet } from 'react-router-dom';

import { Header, Footer } from '@/components/Containers';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export { Layout };
