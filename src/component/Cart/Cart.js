import React from 'react';
import { List, ListItem, Typography } from '@mui/material';

function Cart({ cartItems }) {
  if (!cartItems || !cartItems.length) {
    return (
      <div>
        <Typography variant="h5">Your Cart is Empty</Typography>
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h5">Your Cart</Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            {/* Render details of each item in the cart */}
            <Typography>{item.title}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Cart;
