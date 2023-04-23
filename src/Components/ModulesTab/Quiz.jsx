import React from 'react'
import calender from '../../Assets/Icons/calendar.svg'
import { BiTimeFive } from 'react-icons/bi'

const Quiz = () => {
  return (
    <div className='w-full h-[80vh] pl-[100px]  flex flex-col mt-[100px] items-start'>
      <div className=' mb-[30px]'>
        <h1 className=' font-bold text-[22px]'>Quiz-1: Data Types</h1>
        <p className='text-[15px] text-gray-400 mt-2'>16 December 2021, Thursday</p>
      </div>
      
      <h1 className='mb-[30px] text-[20px] font-bold'>Quiz Details</h1>

      <div className='w-[900px] h-[150px] flex justify-center items-center bg-gray-50 border-[1px] shadow-md shadow-blue-200'>
        <div className='w-[50%] flex justify-evenly items-center'>
          <div>
            <h1 className=' font-bold text-[17px]  flex justify-center'>10</h1>
            <p className=' text-gray-400'>Questions</p>
          </div>
          <div>
            <h1 className=' font-bold text-[17px]  flex justify-center'>-</h1>
            <p className=' text-gray-400'>Duration</p>
          </div>
          <div>
            <h1 className=' font-bold text-[17px]  flex justify-center'>125</h1>
            <p className=' text-gray-400'>Total Score</p>
          </div>
        </div>

        <div className='w-[1px] h-[80%] bg-gray-300'></div>
  
        <div className='w-[50%] h-full flex justify-evenly items-center'>
          <div className='h-full flex flex-col justify-evenly py-2'>
            <h1 className=' font-bold text-[20px]'>Start:</h1>
            <div className=' text-gray-500 flex gap-2'>
              <img src={calender} className='w-[20px]' alt="" />
              <h1>16 Dec 2021</h1>
            </div>
            <div className='flex gap-1 items-center'>
              <p className=' text-blue-400'><BiTimeFive size={24} /></p>
              <p className=' text-gray-500'>07:30 PM</p>
            </div>
          </div>
          <div className='h-full flex flex-col justify-evenly py-2'>
            <h1 className=' font-bold text-[20px]'>Due:</h1>
            <div className=' text-gray-500 flex gap-2'>
              <img src={calender} className='w-[20px]' alt="" />
              <h1>19 Dec 2021</h1>
            </div>
            <div className='flex gap-1 items-center'>
              <p className=' text-blue-400'><BiTimeFive size={24}/></p>
              <p className=' text-gray-500'>11:59 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz