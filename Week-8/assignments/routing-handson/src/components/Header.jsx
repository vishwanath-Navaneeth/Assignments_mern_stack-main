import React from 'react'
import { NavLink } from "react-router"

const Header = () => {
  return (
    <header className='bg-slate-900 sticky top-0 z-50 shadow-md'>
      <nav className='container mx-auto px-6 py-4 flex items-center justify-between'>
        {/* Logo Section */}
        <div className='flex items-center gap-3'>
          <img 
            className='w-12 h-12 rounded-full border-2 border-indigo-500 object-cover' 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCiaERb1tvYWMKCwyX1PlmHjtyDF_6kAiSA&s" 
            alt="Logo" 
          />
          <span className='text-white text-2xl font-extrabold tracking-wide'>
            Shop<span className='text-indigo-500'>Hub</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className='flex gap-8 items-center text-lg font-medium'>
          <NavLink 
            to={"/"}
            className={({isActive}) => isActive ? "text-indigo-400 border-b-2 border-indigo-400 pb-1 transition-colors" : "text-slate-300 hover:text-indigo-300 transition-colors pb-1 border-b-2 border-transparent"} 
          >
            Home
          </NavLink>
          <NavLink 
            to={"products"}
            className={({isActive}) => isActive ? "text-indigo-400 border-b-2 border-indigo-400 pb-1 transition-colors" : "text-slate-300 hover:text-indigo-300 transition-colors pb-1 border-b-2 border-transparent"} 
          >
            Products
          </NavLink>
          <NavLink 
            to={"contact"}
            className={({isActive}) => isActive ? "text-indigo-400 border-b-2 border-indigo-400 pb-1 transition-colors" : "text-slate-300 hover:text-indigo-300 transition-colors pb-1 border-b-2 border-transparent"} 
          >
            Contact Us
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header