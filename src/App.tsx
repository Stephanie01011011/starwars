import React from 'react';
import Hero from './components/Hero';
import './App.css';
import { Typography } from '@mui/material';
import Selector from './components/Selector';
import Selectinfo from './components/Selectinfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Selector />
      <Footer />
    </div>
  );
}

export default App;
