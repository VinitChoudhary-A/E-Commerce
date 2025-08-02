import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useStore } from "../utils/Zustand";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { cart, deleteCart } = useStore();

  useEffect(() => {
    console.log("cart", cart);
  }, [cart]);

  return (
    <div className="bg-gray-900 w-full min-h-screen ">
      <Navbar />
      <p className="text-gray-400 text-3xl mt-4 font-bold ms-8">Cart</p>
      <div className="flex items-center text-white font-bold text-2xl justify-around  gap-4 ms-8 my-4">
        <p className="ms-34">Cover</p>
        <p className="ms-44">Name</p>
        <p className="ms-34">Price</p>
        <p className="ps-18">Delete</p>
      </div>
      {cart.map((game) => (
        <div className="flex items-center mt-14 justify-around gap-4 ms-8 my-4">
          <img className="w-64 h-64" src={game.cover} alt="" />
          <p className="text-gray-400 text-2xl font-bold">{game.name}</p>
          <p className="text-gray-400 text-2xl font-bold">${game.price}</p>
          <MdDelete
            onClick={() => deleteCart(game)}
            className="text-gray-400  text-4xl font-bold w-10 h-10
            hover:bg-red-800 rounded-4xl cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default Cart;
