/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppDispatch, useAppSelector } from './redux/store';
import { authThunks } from './redux/users/thunks/auth';
import { useLocalStorage } from './utils/storage';

import ProtectedRoute from './components/hoc/ProtectedRoute';
import Home from './components/Pages/Home';
import { Favorites } from './components/Pages/Favorites/Favorites';
import { SignUp, SignIn } from './components/Pages/Auth';
import { Profile } from './components/Pages/Profile';
import Catalog from './components/Pages/Catalog';
import Cart from './components/Pages/Cart';
import { Loading } from './components/Loading';
import { Layout } from './components/Layout';

const App: React.FC = (): JSX.Element => {
  const [hasInit, setInit] = useState(false);
  const dispatch = useAppDispatch();

  const email = useAppSelector((state) => state.users.user.email);

  useEffect(() => {
    const token = useLocalStorage.get('token');

    if (!token) {
      setInit(true);

      return;
    }

    (async () => {
      try {
        await dispatch(authThunks.getCurrentUser()).unwrap();

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
              <Route path="catalog" element={<Catalog />} />
              <Route path="*" element={<Navigate to="/" />} />

              {!email && <Route path="signup" element={<SignUp />} />}
              {!email && <Route path="signin" element={<SignIn />} />}

              <Route element={<ProtectedRoute />}>
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
