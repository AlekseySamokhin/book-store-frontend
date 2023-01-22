import { Outlet } from 'react-router-dom';

import { Header, Footer } from '.';

interface ITypesProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const Layout: React.FC<ITypesProps> = (props): JSX.Element => {
  return (
    <>
      <Header searchValue={props.searchValue} setSearchValue={props.setSearchValue} />
      <Outlet />
      <Footer />
    </>
  );
};

export { Layout };
