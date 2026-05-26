import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from "react-router"

const RootLayout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800'>
      <Header />
      {/* flex-grow ensures the footer is pushed to the bottom if content is short */}
      <main className='flex-grow container mx-auto px-4 py-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout