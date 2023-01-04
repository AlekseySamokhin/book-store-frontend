/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAppDispatch } from './redux/store';
import { login } from './redux/users/usersSlice';
import type { IUserType } from './redux/users/usersSlice';
import { getUser } from './api/userApi';
// import { useLocalStorage } from './hooks/localStorage';

import ProtectedRoute from './components/hoc/ProtectedRoute';
import Header from './components/Containers/Header';
import Footer from './components/Containers/Footer';
import Home from './components/Pages/Home';
import SignUp from './components/Pages/Auth/SignUp';
import SignIn from './components/Pages/Auth/SignIn';
import Profile from './components/Pages/Profile';
import Catalog from './components/Pages/Catalog';
import Cart from './components/Pages/Cart';

const App: React.FC = (): JSX.Element => {
  //  const [auth, setAuth] = useState(false);

  const dispatch = useAppDispatch();

  //  const [token] = useLocalStorage('token', '');

  useEffect(() => {
    (async () => {
      // const token = localStorage.getItem('token');

      const dataUser: IUserType = await getUser();
      dispatch(login(dataUser));
    })();
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
