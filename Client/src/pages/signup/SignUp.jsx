import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"> 
      <h1 className='text-3xl font-semibold text-center text-gray-300'> 
          Sign Up
          <span className='text-blue-500'> ChatApp</span>
        </h1>
    <form action="">
        <div>
        <label className='label p-2'>
            <span className='text-base label-text text-gray-200'>Full Name</span>
          </label>
          <input type="text" placeholder="FullName" className="input input-bordered input-info w-full max-w-lg h-10" />    
        </div>
        <div>
        <label className='label p-2'>
            <span className='text-base label-text text-gray-200'>Username</span>
          </label>
          <input type="text" placeholder="jaskirat singh" className="input input-bordered input-info w-full max-w-lg h-10" />    
        </div>
        <div>
        <label className='label p-2'>
            <span className='text-base label-text text-gray-200'>Password</span>
          </label>
          <input type="password" placeholder="Enter password" className="input input-bordered input-info w-full max-w-lg h-10" />    
        </div>
        <div>
        <label className='label p-2'>
            <span className='text-base label-text text-gray-200'>Confirm Password</span>
          </label>
          <input type="password" placeholder="Confirm Password" className="input input-bordered input-info w-full max-w-lg h-10" />    
        </div>
        {/* Gender check box component here */}
        <GenderCheckBox />
        <a to="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>already have account?</a>
        <div>
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default SignUp