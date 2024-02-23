import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home.js';
import Products from './component/Products/Products.js';
import Navbar from './component/Navbar/Navbar.js';
import Cart from './component/Cart/Cart.js';
import ProductCard from './component/ProductCard/ProductCard.js';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <ProductCard />
      </div>
    </Router>
    
  );
}

export default App;
