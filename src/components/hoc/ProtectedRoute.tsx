/* eslint-disable no-console */
import { useLocation, Navigate } from 'react-router-dom';

import { useAppSelector } from '../../redux/store';

interface IPropsType {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<IPropsType> = (props) => {
  const location = useLocation();
  const user = useAppSelector((state) => state.users.user);

  if (!user.email) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return props.children;
};

export default ProtectedRoute;
