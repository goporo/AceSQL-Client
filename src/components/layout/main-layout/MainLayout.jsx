import React from 'react'
import Header from '../header/Header'
import SideBar from '../side-bar/SideBar'

const MainLayout = ({ children }) => {
    return (
        <div className=''>
            <div className="fixed left-0 top-0 z-10">
                <SideBar />
            </div>
            <div className='flex flex-col h-screen relative pl-[14.625rem]'>
                <Header />
                <div className="bg-slate-100 flex-1">
                    {children}
                </div>

            </div>
        </div>
    )
}

export default MainLayout