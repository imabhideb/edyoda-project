import React from 'react'
import calender from '../../Assets/Icons/calendar.svg'
import { BiTimeFive } from 'react-icons/bi'

const Assignment = () => {
    return (
        <div className='w-full h-[80vh] pl-[100px]  flex flex-col mt-[100px] items-start'>
            <div className=' w-full mb-[30px] flex justify-between items-center'>
                <div>
                    <h1 className=' font-bold text-[22px]'>Assignment-1: Operators | Loops</h1>
                    <p className='text-[15px] text-gray-400 mt-2'>20 December 2021, Thursday</p>
                </div>
                <div className='flex pr-[400px] gap-5'>
                    <div className='flex flex-col justify-end items-end'>
                        <h1 className=' font-semibold text-[22px]'>3</h1>
                        <p className='text-[15px] text-gray-400 mt-2' >Problems</p>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h1 className=' font-semibold text-[22px]'>100</h1>
                        <p className='text-[15px] text-gray-400 mt-2'>Total Scores</p>
                    </div>
                </div>
            </div>

            <h1 className='mb-[30px] text-[20px] font-bold'>Assignment Details</h1>

            <div className='w-[900px] h-[150px] flex justify-center items-center bg-gray-50 border-[1px] shadow-md shadow-blue-200'>
                <div className='w-[50%] flex justify-evenly items-center'>
                    <div>
                        <h1 className=' font-bold text-[17px]  flex justify-center'>3</h1>
                        <p className=' text-gray-400'>Problems</p>
                    </div>
                    <div>
                        <h1 className=' font-bold text-[17px]  flex justify-center'>100</h1>
                        <p className=' text-gray-400'>Total Scores</p>
                    </div>
                </div>

                <div className='w-[1px] h-[80%] bg-gray-300'></div>

                <div className='w-[50%] h-full flex justify-evenly items-center pb-3'>
                    <div className='h-full flex flex-col justify-evenly py-2'>
                        <h1 className=' font-bold text-[20px]'>Start:</h1>
                        <div className=' text-gray-500 flex gap-2'>
                            <img src={calender} className='w-[20px]' alt="" />
                            <h1>20 December 2021</h1>
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
                            <h1>26 December 2021</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <p className=' text-blue-400'><BiTimeFive size={24} /></p>
                            <p className=' text-gray-500'>11:59 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assignment;