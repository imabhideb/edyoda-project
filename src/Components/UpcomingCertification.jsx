import React from 'react'
import logo from '../Assets/Icons/Data-Analysis.png'


const UpcomingCertification = () => {
  return (
      <div className='w-[1100px] h-[180px] flex justify-evenly items-center shadow-lg bg-slate-50'>

          <div className='flex  justify-start items-start'>
              <img src={logo} alt="" />
          </div>

          <div className='flex flex-col  justify-start items-start'>
            <p className='bg-gray-300 mb-2 flex justify-center items-center text-[13px] px-6 py-0.5 rounded-full'>CERTIFICATION <span className='px-4'>|</span>ATTEMPT 1</p>
            <h1 className='mb-2'>DATA ANALYSIS <br /> CERTIFICATION</h1>
            <p className='bg-blue-200 mb-2 flex justify-center items-center text-[13px] px-6 py-0.5 rounded-full'>COMPLETED <span className='px-4'>|</span>21 March 2022</p>
          </div>

          <div>
            <h1 className='mb-3'>EXAM STRUCTURE</h1>
            <p className='mb-2'>Round 1 <span className=' bg-gray-300 rounded-full px-4 py-0.5 text-[13px] font-bold ml-4'>MCQS</span> <span className=' bg-gray-300 rounded-full px-4 py-0.5 text-[13px] font-bold ml-2'>CODING</span></p>
            <p className='mb-2'>Round 2 <span className=' bg-gray-300 rounded-full px-4 py-0.5 text-[13px] font-bold ml-4'>PROJECT</span> </p>
          </div>
          
          <div className=' pr-6 flex justify-center items-center'>
            <button className=' bg-transparent px-5 hover:bg-blue-100  py-1 rounded-full text-blue-600 text-[20px] border-2 border-blue-600'>View Exam Details</button>
          </div>

      </div>
  )
}

export default UpcomingCertification