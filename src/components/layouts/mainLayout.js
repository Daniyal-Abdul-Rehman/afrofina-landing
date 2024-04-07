import React from 'react'
import { Header, Sidebar, BottomNavigation } from '../organisms'
export default function MainLayout({ children, pageTitle }) {
  return (
    <div className='flex bg-[#FEFBFF] h-screen overflow-hidden'>
      <div className='w-[145px] lg:block hidden '>
        <Sidebar />
      </div>
      <div className='overflow-auto w-full flex flex-col h-screen'>
        <Header title={pageTitle} />

        <div className=' w-full flex-grow overflow-hidden bg-[#FEFBFF]'>
          {children}
        </div>
        <div className='lg:hidden block'>
          <BottomNavigation />
        </div>
      </div>
    </div>
  )
}
