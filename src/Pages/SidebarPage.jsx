import React, { useState } from 'react'
import { SidebarData } from '../Components/SidebarData'
import Home from '../Components/Home'
import Modules from '../Components/Modules'
import Instructor from '../Components/Instructor'


const SidebarPage = () => {

    const [activeTab, setActiveTab] = useState('home');


    const Content = ({ activeTab }) => {
        if (activeTab === 'home') {
            return <div><Home/></div>;
        } else if (activeTab === 'modules') {
            return <div><Modules/></div>;
        } else if (activeTab === 'instructor') {
            return <div><Instructor/></div>;
        } else {
            return null;
        }
    };


    return (
        <div className='w-full h-[92%] flex'>


            {/* SIdebar data */}
            <div className='w-[5%] h-full  bg-[#002244]'>
                <ul >
                    {SidebarData.map((val, key) => {
                        return <li onClick={() => setActiveTab(val.link)} className='w-full h-[65px] text-white flex justify-center items-center active:bg-slate-200 active:text-black hover:bg-slate-200 hover:text-black' key={key}>{val.icon}</li>
                    })}
                </ul>
            </div>


            {/* Sidebar Content */}
            <div className='w-[95%] h-[100%] flex flex-col '>
                <Content activeTab={activeTab} />
            </div>
        </div>
    )
}

export default SidebarPage