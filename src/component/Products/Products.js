import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data or use dummy data
    // For simplicity, using dummy data
    setProducts([
      { id: 1, name: 'Product 1', price: 10.99 },
      { id: 2, name: 'Product 2', price: 19.99 },
      // Add more products as needed
    ]);
  }, []);

  const addToCart = (product) => {
    // Implement your logic to add product to the cart
    console.log(`Added ${product.name} to the cart`);
  };

  return (
    <div>
      <h2>Products Page</h2>
      {products.map((product) => (
        <Card key={product.id} sx={{ maxWidth: 300, marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              ${product.price.toFixed(2)}
            </Typography>
            <Button onClick={() => addToCart(product)} variant="contained">
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Products;
