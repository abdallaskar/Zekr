import { useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Azkar from './pages/Azkar/Azkar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home></Home>
      <Azkar></Azkar>
    </>
  );
}

export default App;
