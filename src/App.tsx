import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { useAppDispatch, useAppSelector } from './redux/store';
import { authThunks } from './redux/users/thunks';

import { useLocalStorage } from './utils';

import { Layout, PrivateRoute } from './components/Containers';
import { Cart, SignIn, SignUp, Profile, Favorites, Home, Product } from './components/Pages';
import { Loader } from './components/ui';

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.auth.user.email);

  useEffect(() => {
    const token = useLocalStorage.get('token');

    if (!token) {
      setIsLoading(true);

      return;
    }

    (async () => {
      try {
        await dispatch(authThunks.getCurrentUser());
      } finally {
        setIsLoading(true);
      }
    })();
  }, [dispatch]);

  return (
    <>
      {!isLoading ? (
        <Loader />
      ) : (
        <>
          <ToastContainer />

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="product/:bookId" element={<Product />} />
              <Route path="*" element={<Navigate to="/" />} />

              {!email && <Route path="signup" element={<SignUp />} />}
              {!email && <Route path="signin" element={<SignIn />} />}

              <Route element={<PrivateRoute />}>
                <Route path="favorites" element={<Favorites />} />
                <Route path="cart" element={<Cart />} />
                <Route path="profile" element={<Profile />} />
              </Route>
            </Route>
          </Routes>
        </>
      )}
    </>
  );
};

export { App };
