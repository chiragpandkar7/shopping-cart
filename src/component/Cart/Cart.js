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

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price , 0)
  }; 

  return (
    <div>
      <Typography variant="h5">Your Cart</Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <Typography>{item.title}</Typography>
            <Typography>
               Rs. {item.price} (Quantity: {item.quantity}) (Amount: {item.price * item.quantity})
            </Typography>


          </ListItem>
        ))}
      </List>

      <Typography>
        Total Amount: Rs. {getTotalAmount()}
      </Typography>
    </div>
  );
}

export default Cart;
