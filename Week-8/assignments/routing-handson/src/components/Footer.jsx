import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-slate-400 py-8 text-center border-t border-slate-800'>
      <div className='container mx-auto px-6'>
        <h2 className='text-2xl font-semibold text-white mb-2'>
          Shop<span className='text-indigo-500'>Hub</span>
        </h2>
        <p className='text-sm mb-4'>Providing the best premium products since 2026.</p>
        <p className='text-xs text-slate-500'>&copy; {new Date().getFullYear()} ShopHub Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer