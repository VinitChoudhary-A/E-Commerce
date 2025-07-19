import React from 'react'
import filterNames from '../utils/Filternames'
import { useStore } from '../utils/Zustand'
const Sidebar = () => {
  const {genreSetter}= useStore()
  const filters = filterNames.slice(0,3)
  const genres = filterNames.slice(3,filterNames.length)
  const genreHandler=(name)=>{
    genreSetter(name)
  }
  return (
    <div  className=' gap-4 bg-gray-900 text-white w-40 h-full'>
      <ul className='ms-6 mt-10 '>

        <h1 className='text-2xl mb-4 hover:text-blue-800 cursor-pointer  font-bold'>Filter</h1>
        {filters.map((names,index)=>{
          return(
            <>
            <li onClick={()=>{genreHandler(names.name)}} key={index} className='text-gray-500 flex items-center gap-2 hover:text-blue-300 cursor-pointer mb-4'>{names.icon}{names.name}</li>
            </>
          )
        })}
          <h1 className='text-2xl hover:text-blue-800 cursor-pointer font-bold mb-4'>Genres</h1> 
        {genres.map((names,index)=>{
          return(
            <>

            <li onClick={()=>{genreHandler(names.name)}} key={index} className='text-gray-500 flex items-center  gap-2 hover:text-blue-300 cursor-pointer mb-4'>{names.icon}{names.name}</li>
            </>
          )
        })}
        
      </ul>
    </div>
  )
}

export default Sidebar