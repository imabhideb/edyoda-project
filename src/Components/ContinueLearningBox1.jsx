import React from 'react'
import logo from '../Assets/Icons/Data Wrangling.png'

const ContinueLearningBox1 = () => {
  return (
    <div className='w-[1000px]'>
        <a className=' justify-end pb-3 text-cyan-400 font-bold pr-2 flex' href='/'>VIEW MODULE DETAILS</a>
        <div className='w-[1000px] h-[330px] border-2  rounded-lg flex bg-gray-50 shadow-md shadow-gray-300'>

            <div className=' w-[60%] h-full border-r-2 border-blue-200'>
                <div className='flex justify-start pl-[50px] py-[20px] gap-[20px] items-center'>
                    <img src={logo} className='w-[80px]' alt="" />
                    <h1 className='text-[25px] font-semibold'>DATA WRANGLING & <br/>VISUALIZATION</h1>
                </div>

                <div className='flex justify-center mt-5 gap-5'>
                    <div className='flex flex-col justify-between items-end py-1'>
                        <h1>Live Sessions</h1>
                        <h1>Assignments</h1>
                        <h1 className=''>MCQ Quiz</h1>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <p className=' text-blue-300'>0/13</p>
                        <div className='w-[300px] h-[6px] rounded-full bg-blue-300 mb-1'></div>
                        <p className=' text-blue-300'>0/3</p>
                        <div className='w-[300px] h-[6px] rounded-full bg-blue-300 mb-1'></div>
                        <p className=' text-blue-300'>0/6</p>
                        <div className='w-[300px] h-[6px] rounded-full bg-blue-300 mb-1'></div>
                    </div>
                </div>

            </div>


            <div className=' w-[40%] h-full flex flex-col justify-evenly items-start pl-[40px]'>
                <div>
                    <h1 className=' font-semibold text-[20px]'>Today's Plan</h1>
                    <p className='text-[14px]'>21 March 2022</p>
                </div>

                <div className=' text-cyan-400 font-semibold text-[20px]'>
                    <h1>Data Transformation using <br />Pandas-3</h1>
                </div>

                <div className='flex w-full justify-between pr-[40px]'>
                    <h1 className=' text-slate-400'>Daily Feedback</h1>
                    <p className=' italic text-sm text-cyan-500'>opens at 07:30 PM</p>
                </div>

                <div className='flex flex-col justify-center items-start'>
                    <button className=' bg-slate-300 px-7 py-2 rounded-full hover:bg-slate-400 font-semibold'>JOIN LIVE SESSION</button>
                    <h1 className=' pl-5 text-gray-400'>BEGINS AT 07:30 PM</h1>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ContinueLearningBox1