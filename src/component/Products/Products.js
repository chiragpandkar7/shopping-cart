import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard.js';
import Cart from '../Cart/Cart.js';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://dummyjson.com/products')
      setProducts(response.data.products);
    };
    fetchData();
  }, []);

  const addToCart = (product) => {
    setCartItems((cartItems) => [...cartItems, product]);
    alert(`Added ${product.title} to the cart`);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', padding:'20px' }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;