import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Temperature from './pages/temperature/Temperature';
import Navbar from './components/navbar/Navbar';
import Comparaison from  './pages/comparaison/Comparaison';

function App() {
  return (
    <div className='App'>
      <div className='Navbar'>
          <Navbar />
      </div>
      <div className='Main'> {/* New Main div */}
        <div className='Sidebar'>
          <Sidebar />
        </div>
        <div className='Content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/temperature" element={<Temperature />} />
            <Route path="/Comparaison" element={<Comparaison />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;