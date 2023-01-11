/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppDispatch, useAppSelector } from './redux/store';
import { userThunks } from './redux/users/usersThunks';
import { useLocalStorage } from './utils/storage';

import ProtectedRoute from './components/hoc/ProtectedRoute';
import Home from './components/Pages/Home';
import { Favorites } from './components/Pages/Favorites/Favorites';
import { SignUp, SignIn } from './components/Pages/Auth';
import Profile from './components/Pages/Profile';
import Catalog from './components/Pages/Catalog';
import Cart from './components/Pages/Cart';
import { Loading } from './components/Loading';
import { Layout } from './components/Layout';

const App: React.FC = (): JSX.Element => {
  const [hasInit, setInit] = useState(false);
  const dispatch = useAppDispatch();
  const authUser = useAppSelector((state) => state.users.user.email);

  useEffect(() => {
    const token = useLocalStorage.get('token');

    if (!token) {
      setInit(true);

      return;
    }

    (async () => {
      try {
        await dispatch(userThunks.getCurrentUser()).unwrap();

        setInit(true);
      } catch {
        setInit(true);
      }
    })();
  }, [dispatch]);

  return (
    <>
      {!hasInit ? (
        <Loading />
      ) : (
        <>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              {!authUser && <Route path="signup" element={<SignUp />} />}
              {!authUser && <Route path="signin" element={<SignIn />} />}

              <Route path="catalog" element={<Catalog />} />
              <Route
                path="cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                path="favorites"
                element={
                  <ProtectedRoute>
                    <Favorites />
                  </ProtectedRoute>
                }
              />
              <Route
                path="profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
};

export { App };
