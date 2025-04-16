import React from 'react';
import Header from './components/Header';
import Introduce from './components/Introduce';
import About from './components/About';
import Hobby from './components/Hobby';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Introduce />
      <main className="main">
        <About />
        <Hobby />
      </main>
    </>
  );
}

export default App;
