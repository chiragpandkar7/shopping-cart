import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard.js';
import Cart from '../Cart/Cart.js'; 
import axios from 'axios';

const Products = ({cartItems, setCartItems}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products);
    };
    fetchData();
  }, []);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if(existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, {...product, quantity: 1}]);
    }
    alert(`Added ${product.title} to the cart`)
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', padding: '20px' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
