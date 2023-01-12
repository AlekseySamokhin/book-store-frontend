/* eslint-disable no-console */
import { useLocation, Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '../../redux/store';

const ProtectedRoute: React.FC = (): JSX.Element => {
  const location = useLocation();
  const auth = useAppSelector((state) => state.users.user.email);

  console.log(location);

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
