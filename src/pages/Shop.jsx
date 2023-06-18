import React from 'react';
import { Navbar } from '../components/Navbar';
import { Item } from '../components/Item';

export const Shop = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Navbar />
      <div className="w-4/5 mx-auto my-4 grid grid-cols-4 grid-rows-4 justify-center gap-4">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};
