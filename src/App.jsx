import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FoodMenu from './pages/FoodMenu';
import BeverageMenu from './pages/BeverageMenu';
import DessertMenu from './pages/BarMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods" element={<FoodMenu />} />
        <Route path="/beverages" element={<BeverageMenu />} />
        <Route path="/desserts" element={<DessertMenu />} />
      </Routes>
    </Router>
  );
}

export default App;