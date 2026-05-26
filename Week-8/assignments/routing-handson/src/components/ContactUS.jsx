import React from 'react'

const ContactUS = () => {
  return (
    <div className='max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl mt-10 border border-slate-100'>
      <h2 className='text-3xl font-extrabold text-slate-900 mb-2 text-center'>Get in Touch</h2>
      <p className='text-center text-slate-500 mb-8'>We'd love to hear from you. Fill out the form below!</p>
      
      <form className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <label className='text-slate-700 font-semibold text-sm'>Full Name</label>
          <input 
            type="text" 
            className='bg-slate-50 border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors' 
            placeholder='John Doe' 
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-slate-700 font-semibold text-sm'>Email Address</label>
          <input 
            type="email" 
            className='bg-slate-50 border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors' 
            placeholder='you@example.com' 
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-slate-700 font-semibold text-sm'>Message</label>
          <textarea 
            rows="5" 
            className='bg-slate-50 border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors resize-none' 
            placeholder='How can we help you today?'
          ></textarea>
        </div>
        <button 
          type="button" 
          className='mt-2 bg-indigo-600 text-white font-bold py-3.5 rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg'
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactUS