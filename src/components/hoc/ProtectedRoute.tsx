import { useLocation, Navigate } from 'react-router-dom';

import { useAppSelector } from '../../redux/store';

const ProtectedRoute: React.FC<{ children: React.ReactElement }> = (props) => {
  const location = useLocation();
  const authUser = useAppSelector((state) => state.users.user.email);

  if (!authUser) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return props.children;
};

export default ProtectedRoute;
