import React from "react";
import { Navbar } from "../components/Navbar";
import { Item } from "../components/Item";
import { ITEMS } from "../items";

export const Shop = () => {
  return (
    <div className='flex flex-col overflow-x-hidden'>
      <Navbar />
      <div className='w-4/5 mx-auto my-4 grid grid-cols-1 grid-rows-4 justify-center gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {ITEMS.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};
