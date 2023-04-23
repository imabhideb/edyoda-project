import React from 'react'

const Content1 = () => {
  return (
    <div className=' w-full h-full pt-[50px] pl-[40px]'>
        <h1 className='text-[17px] font-semibold mb-3'>Session Plan</h1>
        <p className='text-gray-700 mb-5'>LIVE session is about to start. Please stay tuned.</p>
        <button className='bg-gray-200 px-7 py-2 rounded-full hover:bg-slate-300'>JOIN LIVE SESSION</button>
        
        <h1 className='mt-[50px] mb-5 font-semibold'>Sub-Topics</h1>
        <p className='text-gray-700 mb-1'>1. Sorting and Indexing Dataframe </p>
        <p className='text-gray-700 mb-1'>2. Filtering Dataframe</p>
        <p className='text-gray-700 mb-1'>3. Usage of loc and iloc functions</p>

        <h1 className='mt-7 font-semibold'>Session Details</h1>
    </div>
  )
}

export default Content1