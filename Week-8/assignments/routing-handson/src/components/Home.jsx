import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[65vh] text-center px-4'>
      <div className='bg-white p-12 rounded-3xl shadow-xl max-w-4xl border border-slate-100'>
        <h1 className='text-5xl font-extrabold text-slate-900 mb-6 leading-tight'>
          Welcome to <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>ShopHub</span>
        </h1>
        <p className='text-lg text-slate-600 mb-8 max-w-2xl mx-auto'>
          Discover the best deals on premium products. Quality meets affordability in our curated collection of electronics, fashion, and more.
        </p>
        <Link 
          to="/products" 
          className='inline-block bg-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-1'
        >
          Start Shopping 🛒
        </Link>
      </div>
    </div>
  )
}

export default Home