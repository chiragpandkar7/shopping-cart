import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home.js';
import Products from './component/Products/Products.js';
import Navbar from './component/Navbar/Navbar.js';
import Cart from './component/Cart/Cart.js';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products cartItems={cartItems} setCartItems={setCartItems}/>} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
