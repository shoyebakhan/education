import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='bg-blue-400 text-white py-16 flex flex-col justify-center items-center gap-10'>
        <div className='grid grid-cols-1 w-[70%] sm:grid-cols-3 gap-10'>
          <div>
            <h1 className='text-2xl font-bold pb-4'>Petsitting</h1>
            <p className='text-sm'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <div>
            <h1 className='text-2xl font-bold pb-4'>Information Links</h1>
            <ul className='leading-9'>
              <li className='cursor-pointer hover:text-gray-300'>Home</li>
              <li className='cursor-pointer hover:text-gray-300'>Blog</li>
              <li className='cursor-pointer hover:text-gray-300'>Pricing</li>
              <li className='cursor-pointer hover:text-gray-300'>About</li>
              <li className='cursor-pointer hover:text-gray-300'>Contact</li>
            </ul>
          </div>
          <div>
            <h1 className='text-2xl font-bold pb-4'>Contact Details</h1>
            <ul className='leading-9'>
              <li className='inline-flex gap-2'><span></span> 203 Fake St. Mountain View, San Francisco, California, USA</li>
              <li className='inline-flex gap-2'><span></span> +2 392 3929 210</li>
              <li className='inline-flex gap-2'><span></span>	info@yourdomain.com</li>
            </ul>
          </div>
        </div>
      </div>
      <footer className='text-center py-2 capitalize font-bold font-mono text-lg bg-black text-gray-400'>
        <small>all rights reserved</small>
      </footer>
    </div>
  )
}

export default Footer
