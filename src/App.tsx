import React from 'react';

import { Routes, Route } from 'react-router-dom';

// import Header from './components/Containers/Header';
// import Footer from './components/Containers/Footer';

// import Navigation from './components/Containers/Navigation';

import Home from './components/Pages/Home/Home';

import SignUp from './components/Pages/Auth/SignUp';
import SignIn from './components/Pages/Auth/SignIn';

// import Container from './components/styles/Container';

import Profile from './components/Pages/Profile';

import Cart from './components/Pages/Cart/Cart';

import NotFound from './components/Pages/NotFound/NotFound';

import Layout from './components/Containers/Layout';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element= {<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
