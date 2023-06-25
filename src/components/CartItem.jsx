import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

export const CartItem = (props) => {
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  const { id, title, price, image } = props.data;

  return (
    <div className='grid grid-cols-5 py-4 place-items-center border-t-2 border-b-2 border-zinc-400'>
      <img src={image} className=' w-24 h-auto' />
      <h1 className='font-montserrat text-2xl font-semibold'>{title}</h1>
      <h1 className='font-montserrat text-2xl font-semibold'>{price}$</h1>
      <h1 className='font-montserrat text-2xl font-semibold'>
        Quantity: {cartItems[id]}
      </h1>
      <div className='w-full flex justify-evenly items-center'>
        <button
          onClick={() => {
            addToCart(id);
          }}
          className='bg-green-600 text-white text-2xl font-bold w-2/5 flex justify-center items-center rounded-xl'
        >
          Add
        </button>
        <button
          onClick={() => {
            removeFromCart(id);
          }}
          className='bg-red-600 text-white text-2xl font-bold w-2/5 flex justify-center items-center rounded-xl'
        >
          Remove
        </button>
      </div>
    </div>
  );
};
