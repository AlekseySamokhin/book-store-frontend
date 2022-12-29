import React from 'react';

import { useLocation, Navigate } from 'react-router-dom';

interface IChildrenType {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<IChildrenType> = ({
  children,
}): React.ReactElement => {
  const auth = false;

  const location = useLocation();

  if (!auth) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
