import React from 'react'
import PythonContentTab from './PythonContentTab'

const Python = () => {


  return (
    <div className='w-full h-[92vh] pl-[150px] pt-8 bg-gray-200'>

        <div>
            <h1 className=' font-semibold text-[25px]'>Python Loops</h1>
            <p className='text-[15px] mt-2'>15 December 2021, Wednesday, 07:30 PM</p>
        </div>

        <p className='w-full flex justify-end items-end pr-[100px] text-[20px] text-cyan-600 font-bold'>Daily Feedback</p>

        <div>
            <PythonContentTab/>
        </div>

    </div>
  )
}

export default Python