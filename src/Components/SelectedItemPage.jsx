import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import games from '../utils/Game.js'
import { MdArrowBack } from "react-icons/md";
const SelectedItemPage = () => {
  const game = games[0]
  const footage = game.footage
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

    return () => clearInterval(interval); // Clean up on unmount TO maintain app preformance and not create too many intervals in parallel
  }, []);
  
  return (
    <div className='bg-gray-900 m-0 p-0'>
      <Navbar />
   <div className='flex flex-row items-center justify-between'>
       <h1 className='flex flex-row items-center gap-2 cursor-pointer  text-gray-500 text-xl font-bold ms-4 mt-4'> <MdArrowBack /> Store</h1>
       <h1 className='text-white text-4xl font-bold cursor-pointer ms-4 mt-4'>Cyberpunk 2077</h1>
    </div>
      <div className='flex flex-row items-center justify-center mt-8'>
        <button onClick={prevSlide} className='text-white text-2xl cursor-pointer px-4'>&lt;</button>
        <div className='w-full h-full flex flex-col  justify-center'>
          <img src={footage[current]} alt="Cyberpunk 2077" className='w-full h-full cursor-pointer object-left rounded-2xl' />
        </div>
        <button onClick={nextSlide} className='text-white text-2xl cursor-pointer px-4'>&gt;</button>
      </div>
      <div className='flex justify-center mt-4'>
        {footage.map((_, idx) => (
            <span
            key={idx}
            className={`mx-1 w-3 h-3 rounded-full inline-block ${idx === current ? 'bg-white' : 'bg-gray-600 '}`}
            ></span>
        ))}
      </div>
        <h1 className='text-white ms-4  text-start text-2xl font-bold  mt-4'>About</h1>
        <p className='text-gray-400 text-xl font-bold ms-4 mt-4'>{game.desc}</p>
        <div className='flex flex-row  items-center justify-between'>
            <p className='text-gray-400 text-xl font-bold ms-4 mt-4'>${game.price}</p>
            <p className=' text-gray-400 text-xl font-bold ms-4 mt-4'>Add to Cart +</p>
        </div>
    </div>
  )
}

export default SelectedItemPage