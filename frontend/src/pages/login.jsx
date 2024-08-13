import React from 'react'

function login() {
  return (
    <>
      <div className='flex border shadow divide-x-2 mx-56 my-36 min-h-[70%]' >
        <div className='basis-1/2 p-20'>
          <img src="/undraw_secure_login_pdn4.svg" alt=" login-logo" />
        </div>
        <form className='bg-white basis-1/2 flex flex-col space-y-5 justify-center  items-center p-10'>
          <div className='text-3xl font-semibold text-start w-[60%]'>Welcome Back!</div>
          <div className='flex flex-col w-[60%]'>
            <label htmlFor="email">Enter Email</label>
            <input type="email" id="email"
              className=''
              placeholder='email@gmail.com' />
          </div>
          <div className='flex flex-col w-[60%]'>
            <label htmlFor="password">Enter Password</label>
            <input type="password" id="password"
              className=''
              placeholder='Enter password' />
          </div>
          <button type="submit" className='bg-blue-700 text-white px-10 py-1.5 w-[60%]'>Login</button>
        </form>


      </div>
    </>
  )
}

export default login