import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="w-screen h-24 bg-gray-300 items-center justify-center grid grid-cols-3">
      <Link to={'/'} className="font-montserrat text-3xl font-bold select-none text-center">
        Shopping Cart
      </Link>
      <Link to={'/shopping-cart'} className='text-4xl col-start-3 w-full text-center'>🛒</Link>
    </div>
  );
};
