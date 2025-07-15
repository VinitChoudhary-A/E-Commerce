import React from 'react'
import filterNames from '../utils/Filternames'
const Sidebar = () => {
  const filters = filterNames.slice(0,3)

  const genres = filterNames.slice(4,filterNames.length)
  return (
    <div  className=' gap-4 bg-gray-900 text-white w-40 h-full'>
      <ul className='ms-6 mt-10 '>

        <h1 className='text-2xl mb-4 hover:text-blue-800 cursor-pointer  font-bold'>Filter</h1>
        {filters.map((name,index)=>{
          return(
            <>
            <li key={index} className='text-gray-500 flex items-center gap-2 hover:text-blue-300 cursor-pointer mb-4'>{name.icon}{name.name}</li>
            </>
          )
        })}
          <h1 className='text-2xl hover:text-blue-800 cursor-pointer font-bold mb-4'>Genres</h1> 
        {genres.map((name,index)=>{
          return(
            <>

            <li key={index} className='text-gray-500 flex items-center  gap-2 hover:text-blue-300 cursor-pointer mb-4'>{name.icon}{name.name}</li>
            </>
          )
        })}
        
      </ul>
    </div>
  )
}

export default Sidebar