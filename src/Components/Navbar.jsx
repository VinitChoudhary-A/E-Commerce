import React, { useState } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { create } from 'zustand'
const useStore = create((set) => ({
  current: "True",
  change: (status) => set((state) => ({ current: status })),
}))
const Navbar = () => {
  const { current, change } = useStore()
  const navigate = useNavigate();
  const githubLink = "https://github.com/VinitChoudhary-A"
 
  const OnClickBrowse = (status) => {
    change(status);
    navigate('/browse');
  };
  
  const onClickHome = (status) => {
    change(status);
    navigate('/');
  };
  
  return (
    <nav className='flex flex-row mx-8 text-white justify-between '>
      <div className='flex gap-10 flex-row'>
        <button  onClick={() => onClickHome("True")} className='font-bold cursor-pointer text-xl  '>Game Store</button>
      {current === "True" && <button onClick={() => OnClickBrowse("False")} className='font-bold cursor-pointer text-xl '>Browse Store</button>}  
     {current === "False" && <input type="text" placeholder='Search' className='bg-gray-100/50 backdrop-blur-md rounded-full px-4 py-1 h-8 mt-4' />} 
      </div>
      <div className='flex gap-10 flex-row'>
        <button onClick={()=>{window.open(githubLink, '_blank')}}  className='flex font-bold justify-center items-center  cursor-pointer text-xl'> <FiGithub className='m-4 size-6' /> Vinit Choudhary</button>
        <button className=' flex font-bold justify-center items-center  cursor-pointer text-2xl'> <CiShoppingCart className='m-3' />
          Cart:<p>0</p></button>
      </div>
    </nav>
  )
}

export default Navbar