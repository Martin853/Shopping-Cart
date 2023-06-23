import React from 'react';

export const Item = (props) => {
  return (
    <div className="w-full h-72  bg-stone-200 rounded-lg flex justify-center items-center">
      <div className="w-10/12 mx-auto h-full py-4  my-auto flex flex-col gap-2">
        <img
          src="https://designshack.net/wp-content/uploads/placeholder-image.png"
          className="w-full rounded bg-violet-600"
        />
        <div className="flex justify-evenly">
          <h1 className="font-montserrat text-center font-medium text-lg select-none">
            {props.title}
          </h1>
          <h1 className="font-montserrat text-center font-medium text-lg select-none">
            Price: {props.price}$
          </h1>
        </div>
        <button className="w-full h-full  rounded-lg bg-violet-600 outline-none border-none font-montserrat text-white text-lg select-none hover:bg-violet-700">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
