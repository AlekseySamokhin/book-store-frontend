import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Containers/Header';
import Footer from './components/Containers/Footer';

// import Navigation from './components/Containers/Navigation';

import Home from './components/Pages/Home/Home';

import SignUp from './components/Pages/Auth/SignUp';
import SignIn from './components/Pages/Auth/SignIn';

// import Container from './components/styles/Container';

import Profile from './components/Pages/Profile';
import Catalog from './components/Pages/Catalog';

import Cart from './components/Pages/Cart/Cart';

import ProtectedRoute from './components/hoc/ProtectedRoute';

const App: React.FC = () => {
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
