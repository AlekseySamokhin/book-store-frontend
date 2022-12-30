import React from 'react';

import { useLocation, Navigate } from 'react-router-dom';

import { useAppSelector } from '../../redux/store';

interface IChildrenType {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<IChildrenType> = ({ children }) => {
  const user = useAppSelector((state) => state.users.user);

  // const user = undefined;

  const location = useLocation();

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
