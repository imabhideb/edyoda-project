import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('DS031221');
  const [symbol, setSymbol] = useState(<IoMdArrowDropdown size={25} />)


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setSymbol(<IoMdArrowDropdown size={25} />)
    }
    else {
      setSymbol(<IoMdArrowDropup size={25} />)
    }
  };


  return (
    <div className='w-full h-[8%] relative flex'>
      <div className='w-[15%] h-full bg-[#002244] text-white flex justify-center items-center'>
        <h1 className='flex' onClick={toggleDropdown}> {text}{symbol}</h1>
      </div>
      <div className='w-[85%] h-full bg-[#002244] flex justify-start pl-[40px] font-semibold text-[20px] text-white items-center'> Data Scientist Program</div>
      {isOpen && (
        <div className="absolute w-full h-[150px] bg-[#002244] text-white mt-[77px]">
          <div className=' w-full h-full flex flex-col pl-[50px]'>
            <h1 className='mb-[30px]'>Select Program</h1>

            <div className='flex gap-6'>
              <button onClick={() => setText('ECRD')} className='px-2 py-1 rounded-lg  text-white'>ECRD</button>
              <button onClick={() =>  setText('FSR222222')} className='px-2 py-1 rounded-lg  text-white' >FSR222222</button>
              <button onClick={() => setText('DS261121')} className='px-2 py-1 rounded-lg  text-white'>DS261121</button>
              <button onClick={() => setText('DS031221')} className='px-2 py-1 rounded-lg  text-white'>DS031221</button>
            </div>

          </div>
        </div>
      )}
    </div>

  )
}

export default Navbar