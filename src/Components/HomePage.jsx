import React from 'react'
import Navbar from './Navbar'
import background from '../assets/pyke.mp4'
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const navigate = useNavigate();
    const githubLink = "https://github.com/VinitChoudhary-A"
    const linkedinLink = "https://www.linkedin.com/in/vinitchoudhary-dev/"
    return (

        <div className='flex flex-col  h-screen overflow-hidden relative'>
            <video src={background} autoPlay loop playsInline muted className='absolute inset-0 z-0 h-full w-full object-cover' />
            <div className="absolute z-10">
                <Navbar className="bg-transparent  backdrop-blur-md " />
                <div className='flex flex-row w-1/3'>
                    <div className='flex flex-col justify-center mt-34 ms-10   w-full'>
                        <div className='flex flex-col rounded-lg bg-gray-100/50 lg:px-5 px-5   backdrop-blur-md py-5 h-full justify-center'>
                            <h1 className='md:text-3xl lg:text-4xl font-bold text-center mt-0 text-gray-700 mb-3'>Game Store</h1>
                            <p className='text-white break-words whitespace-normal text-xl'>The best destination to buy new games to competitve prices. 24 hours support , "best price" guarantee and a flawless UX . Wish for more? Tell us below - or check out our <i className='text-green-300 pointer-cursor text-xl '>careers.</i> </p>
                        </div>
                        <div className='flex  flex-row justify-center items-center rounded-full mt-4 gap-4 mb-4 bg-gray-100/50 pb-2 lg:px-30   backdrop-blur-md h-fit '>
                            <button onClick={()=>{navigate('/browse')}} className='bg-blue-100 text-black lg:px-3 px-4 py-1 cursor-pointer  rounded-full mt-4'>Browse</button>
                            <button className='bg-white text-black lg:px-3 px-4 whitespace-nowrap py-1  text-center cursor-pointer rounded-full mt-4'>Play Dice</button>
                            <button onClick={()=>{window.open(githubLink, '_blank')}} className='bg-white text-black lg:px-3 px-4 py-1 cursor-pointer rounded-full mt-4'>Github</button>
                            <button onClick={()=>{window.open(linkedinLink, '_blank')}} className='bg-white text-black lg:px-3 px-4 py-1 cursor-pointer rounded-full mt-4'>LinkedIn</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default HomePage;