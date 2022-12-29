/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import { login } from './redux/users/usersSlice';

import { useAppDispatch } from './redux/store';

import Header from './components/Containers/Header';
import Footer from './components/Containers/Footer';

import Home from './components/Pages/Home';
import SignUp from './components/Pages/Auth/SignUp';
import SignIn from './components/Pages/Auth/SignIn';
import Profile from './components/Pages/Profile';
import Catalog from './components/Pages/Catalog';
import Cart from './components/Pages/Cart';

import ProtectedRoute from './components/hoc/ProtectedRoute';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [auth, setAuth] = useState(false);

  console.log(auth);

  useEffect(() => {
    const token = localStorage.getItem('book-store-token');

    if (token) {
      setAuth(true);
      // eslint-disable-next-line no-console
      console.log('token');
      // eslint-disable-next-line no-console
    } else {
      console.log('not token');
      dispatch(
        login({
          id: 1,
          fullName: 'asdhdash',
          email: 'asdhasdasdh',
          password: 'ashddsadsah',
          dob: 'sdashsadashd',
        }),
      );
    }
  }, [dispatch]);

  return (
    <>
      <Header />

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
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
