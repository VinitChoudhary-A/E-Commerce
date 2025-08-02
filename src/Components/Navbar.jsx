import React, { useState, useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useStore } from "../utils/Zustand.jsx";
import { games } from "../utils/Game";
const Navbar = () => {
  const { current, change, searchGames, search,cart} = useStore();
  const navigate = useNavigate();
  const githubLink = "https://github.com/VinitChoudhary-A";
  const OnClickBrowse = (status) => {
    change(status);
    navigate("/browse");
  };
  const onClickHome = (status) => {
    change(status);
    navigate("/");
  };
  const SearchHandler = (e) => {
    const searchValue = e.target.value;
    const filteredGames = games.filter((game) =>
      game.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    searchGames(filteredGames);
    console.log(search);
  };
  return (
    <nav className="flex flex-row mx-8 text-white justify-between ">
      <div className="flex gap-10 flex-row">
        <button
          onClick={() => onClickHome("True")}
          className="font-bold cursor-pointer text-xl  "
        >
          Game Store
        </button>
        {current === "True" && (
          <button
            onClick={() => OnClickBrowse("False")}
            className="font-bold cursor-pointer text-xl "
          >
            Browse Store
          </button>
        )}
        {current === "False" && (
          <input
            type="text"
            placeholder="Search Games"
            className="bg-gray-100/50 w-100 backdrop-blur-md rounded-full px-4  h-10 mt-3"
            onChange={SearchHandler}
          />
        )}
      </div>
      <div className="flex gap-10 flex-row">
        <button
          onClick={() => window.open(githubLink, "_blank")}
          className="flex font-bold justify-center items-center cursor-pointer text-xl"
        >
          <FiGithub className="m-2 size-5" /> Vinit Choudhary
        </button>
        <button  onClick={() => {navigate("/cart"), change("True")}} className=" flex font-bold justify-center items-center  cursor-pointer text-2xl">
          <CiShoppingCart className="m-3" />
          Cart:<p className="text-2xl ms-2 text-red-500 font-bold">{cart.length}</p>
        </button>  
      </div>
    </nav>
  );
};

export default Navbar;