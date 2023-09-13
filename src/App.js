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
      <div className="lg:flex mt-[-65px]">
        <Blocks />
        <Transactions />
      </div>
      <Footer />
    </div>
  )
}

export default App
