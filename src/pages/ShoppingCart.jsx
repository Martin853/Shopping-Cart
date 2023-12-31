import React, { useContext } from "react";
import { Navbar } from "../components/Navbar";
import { CartItem } from "../components/CartItem";
import { ITEMS } from "../items";
import { ShopContext } from "../context/shop-context";
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
  const { cartItems } = useContext(ShopContext);

  const keys = Object.keys(cartItems);

  const calculateItemsNumber = () => {
    let itemsNumber = 0;

    keys.forEach((key) => {
      const value = cartItems[key];
      itemsNumber += value;
    });

    return itemsNumber;
  };

  const totalPrice = () => {
    let price = 0;

    for (const key in cartItems) {
      const quantity = cartItems[key];
      const item = ITEMS.find((item) => item.id.toString() === key);
      if (item) {
        const itemPrice = parseFloat(item.price);
        price += itemPrice * quantity;
      }
    }

    return price;
  };

  return (
    <div className='flex flex-col overflow-x-hidden'>
      <Navbar />
      <h1 className='font-montserrat h-20 w-full bg-gray-100 mt-4 flex items-center justify-center text-3xl font-semibold'>
        Cart Items
      </h1>

      {calculateItemsNumber() > 0 ? (
        <>
          <div className='mt-4 bg-gray-100 w-full h-fit py-4 flex flex-col gap-4'>
            {ITEMS.map((Item) => {
              if (cartItems[Item.id] != 0) {
                return <CartItem data={Item} key={Item.id} />;
              }
            })}
          </div>
          <div className='w-full h-24 bg-gray-300 flex justify-evenly items-center'>
            <h1 className='font-montserrat text-3xl'>
              Total: {totalPrice()} $
            </h1>
            <button className=' bg-teal-900 p-4 font-montserrat rounded-xl h-14 text-white'>
              Checkout
            </button>
          </div>
        </>
      ) : (
        <div className='w-full h-72 bg-gray-200 my-12 font-montserrat text-4xl font-bold flex flex-col gap-12 justify-center items-center'>
          Your Cart Is Empty
          <Link to={"/"} className=' bg-violet-800 text-white rounded-lg p-4'>
            Back To Shop
          </Link>
        </div>
      )}
    </div>
  );
};
