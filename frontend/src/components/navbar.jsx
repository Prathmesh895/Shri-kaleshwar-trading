import React from 'react'
import { Link } from 'react-router-dom'


function navbar() {
  return (

    <nav className='text-xl border-b px-5 py-3 mt-0 z-50 fixed w-full font-serif bg-white flex justify-between items-center'>
      <div className='flex items-center space-x-3'>
        <img src="/shiva.png" alt="logo" className='w-12' />
        <h1 className='lg:text-3xl text-sm   text-gray-600 font-semibold'>Shri Kaleshwar Trading Company</h1>
      </div>
      <div className='lg:flex justify-between space-x-5 hidden  '>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/login'>Login</Link>
      </div>
    </nav>

  )
}

export default navbar