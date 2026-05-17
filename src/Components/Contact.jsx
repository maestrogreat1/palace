import React from 'react'
import Form from './Form'

const Contact = () => {
  return (
    <div className='bg-linear-to-r from-white from-70% to-30% to bg-red-500 py-20'>
      <div className='flex flex-col md:flex-row max-w-7xl mx-auto'>
        <div className='px-8 md:pl-0 md:pr-8 w-full md:w-1/2 flex flex-col justify-center'>
            <h2 className='text-2xl font-bold mb-2'>Get In Touch With Us</h2>
            <p>We are dedicated to providing professional, reliable and trusted solutions. With years of experience, our cabinet of competent chiefs are fully driven to ensure that your interests and challenges are properly addressed and your rights protected. We specialize in varieties of humanitarian endeavors tailored to the different individuals and communities; meeting each at their unique needs. Our mission is to deliver peace of mind through exceptional global service to humanity.</p>
        </div>
        <div className='mt-6 md:mt-0 px-8 md:px-4 py-4 w-full md:w-1/2 bg-white p-6 shadow-lg'>
            <h2 className='text-2xl font-bold mb-2'>Request a Meeting</h2>
            <Form />
        </div>
      </div>
    </div>
  )
}

export default Contact
