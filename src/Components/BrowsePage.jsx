import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { FcGrid } from "react-icons/fc";
import { FcMenu } from "react-icons/fc";
import Content from "./Content";
import Footer from "./Footer";
import { useStore } from "../utils/Zustand.jsx";

const BrowsePage = () => {
  const { changeColumns, columns, cart, chageCart } = useStore();

  useEffect(() => {
    console.log("No of columns", columns);
  }, [columns]);

  return (
    <div className="bg-gray-900 m-0 p-0 relative z-0">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1  flex mt-8 text-white w-full ms-4 p-0">
          <div className="w-full">
            <h1 className="text-5xl text-white font-bold ">
              Trending & Interesting
            </h1>
            <p className="text-gray-400 mt-2">
              Based on player counts and ratings
            </p>
            <div className="flex flex-row items-center mt-4 justify-between w-full">
              <div className=" space-x-4 ms-4">
                <button className="bg-gray-800  px-4 text-gray-400 py-2 rounded-md">
                  Filter by : <span className="text-blue-500">None</span>
                </button>
                <button className="bg-gray-800 text-gray-400 px-4 py-2 rounded-md">
                  {" "}
                  Clear <span className="text-blue-500">Filter</span>
                </button>
              </div>
              <div className="flex flex-row items-center space-x-6 me-8">
                <p className="text-gray-400">Display Options:</p>
                <button
                  onClick={() => {
                    changeColumns("grid-cols-2");
                  }}
                  className="bg-gray-800  hover:bg-gray-700 text-4xl cursor-pointer text-gray-400  rounded-md"
                >
                  <FcMenu />{" "}
                </button>
                <button
                  onClick={() => {
                    changeColumns("grid-cols-3");
                  }}
                  className="bg-gray-800 hover:bg-gray-700 text-4xl cursor-pointer text-white rounded-md"
                >
                  <FcGrid />{" "}
                </button>
              </div>
            </div>
            <Content />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default BrowsePage;
