import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { useAppDispatch, useAppSelector } from './redux/store';
import { authThunks } from './redux/users/thunks';
import { useLocalStorage } from './utils';

import { Layout, PrivateRoute } from './components/Containers';
import { Cart, SignIn, SignUp, Profile, Favorites, Home, Product } from './components/Pages';
import { Loader } from './components/UI';

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [IsInit, setIsInit] = useState(false);

  const dispatch = useAppDispatch();

  const email = useAppSelector((state) => state.users.user.email);

  useEffect(() => {
    const token = useLocalStorage.get('token');

    if (!token) {
      setTimeout(() => {
        setIsInit(true);
      }, 350);

      return;
    }

    (async () => {
      try {
        await dispatch(authThunks.getCurrentUser()).unwrap();

        setTimeout(() => {
          setIsInit(true);
        }, 350);
      } finally {
        setTimeout(() => {
          setIsInit(true);
        }, 350);
      }
    })();
  }, [dispatch]);

  return (
    <>
      {!IsInit ? (
        <Loader />
      ) : (
        <>
          <ToastContainer />
          <Routes>
            <Route
              path="/"
              element={
                <Layout
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              }
            >
              <Route index element={<Home searchValue={searchValue} />} />
              <Route path="product/:id" element={<Product />} />
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
