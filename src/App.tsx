/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAppDispatch } from './redux/store';
import { getCurrentUserThunk } from './redux/users/usersThunks';
import { storage } from './utils/storage';

import ProtectedRoute from './components/hoc/ProtectedRoute';
import Header from './components/Containers/Header';
import Footer from './components/Containers/Footer';
import Home from './components/Pages/Home';
import { Favorites } from './components/Pages/Favorites/Favorites';
import { SignUp, SignIn } from './components/Pages/Auth';
import Profile from './components/Pages/Profile';
import Catalog from './components/Pages/Catalog';
import Cart from './components/Pages/Cart';
import { Loading } from './components/Loading/Loading';

const App: React.FC = (): JSX.Element => {
  const [hasInit, setInit] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = storage.get('token');

    if (!token) {
      setTimeout(() => {
        setInit(true);
      }, 350);

      return;
    }

    const getInitUserInfo = async () => {
      try {
        setTimeout(() => {
          dispatch(getCurrentUserThunk());
          setInit(true);
        }, 350);
      } catch (error) {
        console.error(error);
      }
    };

    getInitUserInfo();
  }, [dispatch]);

  return (
    <>
      <Header />

      {!hasInit ? (
        <Loading />
      ) : (
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
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
        </Routes>
      )}

      <Footer />
    </>
  );
};

export { App };
