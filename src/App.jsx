import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Shop } from './pages/Shop';
import { ShoppingCart } from './pages/ShoppingCart';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
    </Routes>
  );
};
