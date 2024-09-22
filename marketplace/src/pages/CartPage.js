import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cart, removeFromCart }) => {
  return <Cart cart={cart} removeFromCart={removeFromCart} />;
};

export default CartPage;
