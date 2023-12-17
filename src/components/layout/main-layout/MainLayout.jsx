import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const MainLayout = ({ children }) => {

  return (
    <div className="bg-slate-primary h-full min-h-screen">
      <div className="">
        <div className="fixed top-0 w-screen z-[999]">
          <Header />
        </div>

        <div className="flex-1 pt-[161px] flex flex-col items-center my-2">
          <div className="">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
