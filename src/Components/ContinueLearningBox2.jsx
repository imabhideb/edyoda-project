import React from 'react'

const ContinueLearningBox2 = () => {
  return (
    <div className='w-[400px] h-[330px] mt-[35px] justify-evenly border-2  rounded-lg flex flex-col bg-gray-50 shadow-md shadow-gray-300'>
        <h1 className='pl-[48px] font-semibold text-[20px]'>Progress Overview</h1>
        
        <div className=' flex justify-center items-center'>
            <div className='border-[1px] border-blue-400  rounded-md w-[300px] h-[75px] items-center justify-center flex flex-col'>
                <div className='flex w-full justify-between px-[25px]  h-[90%] items-center '>
                    <h1 className=' font-bold text-[20px]'>0% </h1>
                    <p className=' text-gray-400 font-semibold'>Overall Grade</p>
                </div>
                <div className='h-[10%] w-[200px] bg-gray-400 rounded-full flex items-center'></div>
            </div>
        </div>
        
        
        <div className=' flex justify-center items-center'>
            <div className='border-[1px] border-blue-400  rounded-md w-[300px] h-[75px] items-center justify-center flex flex-col'>
                <div className='flex w-full justify-between px-[25px]  h-[90%] items-center '>
                    <h1 className=' font-bold text-[20px]'>0% </h1>
                    <p className=' text-gray-400 font-semibold'>Attendance</p>
                </div>
                <div className='h-[10%] w-[200px] bg-gray-400 rounded-full flex items-center'></div>
            </div>
        </div>
        
        


        <a className='pb-3 text-cyan-400 font-bold pr-2 pl-[48px] flex' href='/'>VIEW DETAILED PROGRESS</a>
    </div>
  )
}

export default ContinueLearningBox2