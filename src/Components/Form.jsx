import React from 'react'

const Form = () => {
  return (
    <div>
      <form className='grid grid-cols-1 md:grid-cols-2 space-y-2 gap-0 md:gap-x-4'>
        <input type="text" placeholder='Full Name'  className='p-2 border border-gray-400 bg-gray-100'/>
        <input type="text" placeholder='Email'  className='p-2 border border-gray-400 bg-gray-100'/>
        <input type="text" placeholder='Phone'  className='p-2 border border-gray-400 bg-gray-100'/>
        <input type="text" placeholder='Subject'  className='p-2 border border-gray-400 bg-gray-100'/>
        <input type="text" placeholder='Company Name'  className='p-2 border border-gray-400 bg-gray-100'/>
        <input type="text" placeholder='Type of Service'  className='p-2 border border-gray-400 bg-gray-100'/>
        <input type="text" placeholder='Country'  className='p-2 border border-gray-400 bg-gray-100'/>
        <input type="text" placeholder='State'  className='p-2 border border-gray-400 bg-gray-100'/>
        <input type="text" placeholder='Address'  className='p-2 border border-gray-400 bg-gray-100'/>
        <input type="text" placeholder='City'  className='p-2 border border-gray-400 bg-gray-100'/>
        <textarea placeholder='Message' className=' p-2 md:col-span-2 border border-b-gray-400 bg-gray-100' rows={4}></textarea>
        <button className='md:col-span-2 px-5 py-2 bg-red-500 text-white hover:bg-red-600 cursor-pointer w-full'>Submit</button>
      </form>
    </div>
  )
}

export default Form
