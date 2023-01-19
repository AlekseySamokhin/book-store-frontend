import { useLocation, Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '../../redux/store';

const PrivateRoute: React.FC = (): JSX.Element => {
  const location = useLocation();
  const email = useAppSelector((state) => state.users.user.email);

  return email ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export { PrivateRoute };
