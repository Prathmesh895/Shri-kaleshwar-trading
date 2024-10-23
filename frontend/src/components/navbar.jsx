import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Theme from './darktheme'
import { CgMenuRightAlt } from "react-icons/cg";
import { IoCloseCircleOutline } from "react-icons/io5";

function navbar() {
  const [Isopen, setIsopen] = useState(false);
  const handleOnOpen = () => {
    setIsopen(!Isopen);
  }
  return (

    <nav className='text-xl border-b px-5 py-3 mt-0 z-50 fixed w-full font-serif dark:border-gray-600 flex justify-between items-center dark:bg-black bg-white ' >
      <Link to='/'>
        <div className='flex items-center space-x-3'>
          <img src="/shiva.png" alt="logo" className='w-12 dark:invert brightness-0' />
          <h1 className='lg:text-2xl first-line:xl text-sm font-bold md:block hidden'>Shri Kaleshwar Trading Company</h1>
        </div>
      </Link>
      <div className='lg:flex justify-between items-center space-x-5 hidden text-base'>
        <Link to='/' className='hover:dark:text-orange-400  '>Home</Link>
        <Link to='/about' className='hover:dark:text-orange-400 '>About</Link>
        <Link to='/admin' className='hover:dark:text-orange-400 '>Dashboard</Link>
        <Link to='/login' className='hover:dark:text-orange-400  '>Login</Link>
        <Link to='/login' className='hover:dark:text-orange-400  '>Signup</Link>
        <div className='cursor-pointer'><Theme /></div>
      </div>

      {/* nav for small screen  */}
      <div className='lg:hidden flex  items-center'>
        <div className='cursor-pointer'><Theme /></div>
        <CgMenuRightAlt size={35} onClick={handleOnOpen} />
        {
          Isopen &&
          <div className='absolute top-0 left-0 dark:bg-black bg-white border min-h-screen w-[95%] '>
            <div className='float-right m-4'><IoCloseCircleOutline size={35} onClick={handleOnOpen} /></div>
            <div className='flex flex-col justify-between items-center mx-5 space-y-5 mt-16 '>
              <Link to='/' onClick={handleOnOpen}>Home</Link>
              <Link to='/Dashboard' onClick={handleOnOpen}>About</Link>
              <Link to='/login' onClick={handleOnOpen} className='border text-center p-1.5 rounded bg-greenCustom text-black  w-full'>Login</Link>
              <Link to='/login' onClick={handleOnOpen} className='border text-center p-1.5 rounded bg-greenCustom text-black  w-full'>Signup</Link>

            </div>
          </div>
        }
      </div>
    </nav>

  )
}

export default navbar