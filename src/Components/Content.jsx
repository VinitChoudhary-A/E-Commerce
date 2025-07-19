import React, { useEffect, useCallback } from "react";
import { FaHeart } from "react-icons/fa";
import { useStore } from "../utils/Zustand.jsx";
import Motion from "./Motion.jsx";

const Content = () => {
  const { search, wishlist, addToWishList, removeFromWishList ,columns } = useStore();
   const wishListHandler = useCallback(
     (game) => {
       const exists = wishlist.some((g) => g.id === game.id);
       if (exists) {
      
         removeFromWishList(game.id);
        } else {
      
        addToWishList(game);
      }
    },
    [wishlist, addToWishList, removeFromWishList]
  );
  useEffect(() => {
    console.log("Wishlist updated:", wishlist);
  },[wishlist])
if (!Array.isArray(search)) return <p className="text-white p-4">No games available.</p>;

  return (
    <div className={`grid grid-cols-3  sm:grid-cols-${columns} lg:grid-cols-${columns} gap-6 mt-8 px-6 bg-gray-900`}>
      {search.map((game) => (
        <Motion key={game.id}>
          <div
            
            className="bg-gray-800 rounded-2xl shadow-md hover:bg-gray-700 transition duration-300 cursor-pointer"
            >
            <img
              src={game.cover}
              alt={game.name}
              className="w-full h-full object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-white font-semibold text-lg">
                  Add to Cart +
                </p>
                <p className="text-white font-bold">${game.price}</p>
              </div>
              <p className="text-white text-xl font-bold mb-4">{game.name}</p>
              <div className="flex justify-end">
                <FaHeart
                
                  onClick={() => wishListHandler(game)}
                  className={` text-2xl cursor-pointer transition duration-200 ${wishlist.some((g) => g.id === game.id)? "text-red-500" : " hover:text-red-500"}`}
                />
                
              </div>
            </div>
          </div>
        </Motion>
      ))}
    </div>
  );
};

export default Content;
