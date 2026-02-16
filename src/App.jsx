import { useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Azkar from './pages/Azkar/Azkar';
import { Routes, Route } from 'react-router';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/azkar/morning" element={<Azkar />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
