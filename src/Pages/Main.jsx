import React from 'react'
import Navbar from '../Components/Navbar'
import SidebarPage from './SidebarPage'

const Main = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <SidebarPage />
    </div>
  )
}

export default Main