import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Containers/Header';
import Footer from './components/Containers/Footer';

import Navigation from './components/Containers/Navigation';

import Home from './components/Pages/Home/Home';

import SignUp from './components/Pages/Auth/SignUp';
import SignIn from './components/Pages/Auth/SignIn';

import Container from './components/styles/Container';

import Profile from './components/Pages/Profile';

import Cart from './components/Pages/Cart/Cart';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Navigation />
      </Container>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<Profile />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

// @Artem Reva
// Today I've
// 1) added adaptive header;
// 2) added adaptive footer;
// 3) added basic router;
// 4) added templates pages;
// 4) readed about private routes.
// Tomorrow I'll
// 1) add private route;
// 2) read about react router dom;
// 2) add other pages;
// 3) add adaptive in pages.
