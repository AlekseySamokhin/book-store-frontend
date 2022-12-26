import React from 'react';

import styled from 'styled-components';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './App.css';

const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default App;
