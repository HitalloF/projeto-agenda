import React from 'react';
import { Cadastrar } from './Components/Cadastrar';
import Footer from './Components/Footer';
import { Header } from './Components/Header';
import { Lista } from './Components/Lista';

const App = () => {
  return (
    <div className="app--container">
      <Header />
      <Cadastrar />
      <Lista />
      <Footer />
    </div>
  );
};

export default App;
