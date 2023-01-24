import { useLocation, Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '../../redux/store';

const PrivateRoute: React.FC = (): JSX.Element => {
  const email = useAppSelector((state) => state.auth.user.email);
  const location = useLocation();

  return email ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export { PrivateRoute };
