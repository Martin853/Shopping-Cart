import React from "react";
import { Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { ShoppingCart } from "./pages/ShoppingCart";
import { ShopContextProvider } from "./context/shop-context";

export const App = () => {
  return (
    <ShopContextProvider>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
      </Routes>
    </ShopContextProvider>
  );
};
