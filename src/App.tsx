/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { io } from 'socket.io-client';

import { useAppDispatch, useAppSelector } from './redux/store';
import { authThunks } from './redux/users/thunks';

import { useLocalStorage } from './utils';

import { Layout, PrivateRoute } from './components/Containers';
import {
  Cart,
  SignIn,
  SignUp,
  Profile,
  Favorites,
  Home,
  Product,
} from './components/Pages';
import { Loader } from './components/ui';

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [socket, setSocket] = useState<any | null>(null);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  // eslint-disable-next-line no-console
  useEffect(() => {
    setSocket(io('http://localhost:4000'));
  }, []);

  useEffect(() => {
    if (user.email) {
      socket?.emit('newUser', user.id);
    }
  }, [socket, user.email]);

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
            <Route path="/" element={<Layout socket={socket} />}>
              <Route index element={<Home />} />
              <Route path="product/:bookId" element={<Product socket={socket} />} />
              <Route path="*" element={<Navigate to="/" />} />

              {!user.email && <Route path="signup" element={<SignUp />} />}
              {!user.email && <Route path="signin" element={<SignIn />} />}

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
