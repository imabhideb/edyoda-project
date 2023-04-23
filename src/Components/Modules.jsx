import React, { useState } from 'react'
import { ModuleSidebardata } from './ModuleSidebardata';
import Python from './ModulesTab/Python';
import Quiz from './ModulesTab/Quiz';
import Assignment from './ModulesTab/Assignment';

const Modules = () => {

  const [activeTab, setActiveTab] = useState('home');


  const Content = ({ activeTab }) => {
    if (activeTab === 'home') {
      return <div><Python/></div>;
    } else if (activeTab === 'modules') {
      return <div><Quiz/></div>;
    } else if (activeTab === 'instructor') {
      return <div><Assignment/></div>;
    } else {
      return null;
    }
  };

  
  return (
    <div className='flex  h-[92vh]'>
      
      {/* Sidebar tabs */}
      <div className=' w-[11%] bg-slate-300'>
        <ul >
          {ModuleSidebardata.map((val, key) => {
            return (
              <li 
                onClick={() => setActiveTab(val.link)}
                //  className={state === true ? "w-full h-[65px] flex justify-start pl-2 text-[15px] gap-3 items-center bg-slate-200" 
                //    :"w-full h-[65px] flex justify-start pl-2 text-[15px] gap-3 items-center hover:bg-slate-400"}
                className='w-full h-[65px] flex justify-start pl-2 text-[15px] gap-3 items-center hover:bg-slate-400'
                key={key}>
                  {val.icon} {val.title}
              </li>)
          })}
        </ul>
      </div>


      {/* Sidebar Contents */}
      <div className='w-[89%] h-[100%] flex flex-col'>
        <Content activeTab={activeTab}/>
      </div>
    </div>
  )
}

export default Modules