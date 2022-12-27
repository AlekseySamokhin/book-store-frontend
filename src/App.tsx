import React from 'react';

import Header from './components/Containers/Header';
import Main from './components/Main';
import Footer from './components/Containers/Footer';

import AppContainer from './App.styled';

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  );
};

export default App;
