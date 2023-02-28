import { Outlet } from 'react-router-dom';

import { Header, Footer } from '@/components/Containers';

interface ITypeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  socket: any;
}

const Layout: React.FC<ITypeProps> = (props) => {
  // eslint-disable-next-line no-console
  return (
    <>
      <Header socket={props.socket} />
      <Outlet />
      <Footer />
    </>
  );
};

export { Layout };
