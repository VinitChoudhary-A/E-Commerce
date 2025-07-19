import React from 'react'
import { SlGameController } from "react-icons/sl";
const Footer = () => {
  return (
    <footer>
        <div className="container bg-gray-900 text-white w-full">
        <div className='flex items-center gap-4'>
            <SlGameController className='text-4xl hover:text-red-500 cursor-pointer mt-4 mb-4 ms-4' />
            <h1 className='text-2xl font-bold hover:text-blue-500 cursor-pointer  flex items-center
            gap-8 ms-4'>  Game Store</h1>
            </div>
            <div className="grid grid-cols-4 gap-4 ms-4">
                <div >
                    <h1 className='text-lg font-bold hover:text-blue-500 cursor-pointer'>Company</h1>
                    <ul className='text-gray-400 mt-2 mb-2 '>
                        <li className='hover:text-white cursor-pointer'>About</li>
                        <li className='hover:text-white cursor-pointer'>Contact</li>
                        <li className='hover:text-white cursor-pointer'>Blog</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-lg font-bold hover:text-blue-500 cursor-pointer'>Consoles</h1>
                    <ul className='text-gray-400 mt-2 mb-2'>
                        <li className='hover:text-white cursor-pointer'>Playstation</li>
                        <li className='hover:text-white cursor-pointer'>Xbox One</li>
                        <li className='hover:text-white cursor-pointer'>Switch</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-lg font-bold hover:text-blue-500 cursor-pointer'>Resources</h1>
                    <ul className='text-gray-400 mt-2 mb-2'>
                        <li className='hover:text-white cursor-pointer'>Help Center</li>
                        <li className='hover:text-white cursor-pointer'>Contacts</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-lg font-bold hover:text-blue-500 cursor-pointer'>Product Help</h1>
                    <ul className='text-gray-400 mt-2 mb-2'>
                        <li className='hover:text-white cursor-pointer'>Support</li>
                        <li className='hover:text-white cursor-pointer'>File a Bug</li>
                    </ul>
                </div>
            </div>
                <p className='text-center mt-4 text-gray-400'>This page is created by <span>Vinit</span> with React and Tailwind CSS and Vite and React Router and Toast icons and Framer Motion</p>
        </div>
    </footer>
  )
}

export default Footer