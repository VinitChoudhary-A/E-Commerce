import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import games from '../utils/Game.js'
import { MdArrowBack } from "react-icons/md";
import { useStore } from '../utils/Zustand.jsx';
const SelectedItemPage = () => {
  const {carousal} = useStore()
    if (!carousal) return null  
  console.log(carousal)
  const footage = carousal.footage
  const [current, setCurrent] = useState(0)
  
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % footage.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + footage.length) % footage.length)
    console.log(current)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % footage.length);
    }, 3000);

    return () => clearInterval(interval);
     // Clean up on unmount TO maintain
    //  app preformance and not create too many intervals in parallel
  }, []);
  
return (
  <>
    {carousal.map((game, index) => (
      <div key={index} className="bg-gray-900 min-h-screen p-0 m-0">
        <Navbar />

        <div className="flex items-center justify-between px-4 mt-4">
          <h1 className="flex items-center gap-2 text-gray-500 text-xl font-bold cursor-pointer">
            <MdArrowBack /> Store
          </h1>
          <h1 className="text-white text-4xl font-bold">{game.title}</h1>
        </div>

        <div className="flex items-center justify-center mt-8">
          <button onClick={prevSlide} className="text-white text-2xl px-4">&lt;</button>
          <div className="flex justify-center w-full h-full">
            <img
              src={game.footage[current]}
              alt={game.title}
              className="w-full h-full object-cover rounded-2xl cursor-pointer"
            />
          </div>
          <button onClick={nextSlide} className="text-white text-2xl px-4">&gt;</button>
        </div>

        <div className="flex justify-center mt-4">
          {game.footage.map((_, idx) => (
            <span
              key={idx}
              className={`mx-1 w-3 h-3 rounded-full inline-block ${
                idx === current ? 'bg-white' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        <div className="px-4 mt-4">
          <h2 className="text-white text-2xl font-bold">About</h2>
          <p className="text-gray-400 mt-2">{game.desc}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-400 text-xl font-bold">${game.price}</span>
            <button className="text-gray-400 text-xl font-bold hover:text-white">
              Add to Cart +
            </button>
          </div>
        </div>
      </div>
    ))}
  </>
)
}
export default SelectedItemPage