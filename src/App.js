import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Blocks from './components/Blocks';
import Transactions from './components/Transactions';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Blocks />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
