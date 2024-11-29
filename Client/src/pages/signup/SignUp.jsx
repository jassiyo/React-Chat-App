import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {
  const[inputs, setInputs] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:"",
  })
const {loading, signup} = useSignup()
console.log(useSignup());



  const handleCheckBoxChange=(gender)=>{
    setInputs({...inputs, gender})
  }

  const HandleSubmit=async(e)=>{
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <>
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"> 
      <h1 className='text-3xl font-semibold text-center text-gray-300'> 
          Sign Up
          <span className='text-blue-500'> ChatApp</span>
        </h1>
          <form action="" onSubmit={HandleSubmit}>
        <div>
        <label className='label p-2'>
            <span className='text-base label-text text-gray-200'>Full Name</span>
          </label>
          <input 
            value={inputs.fullname}
            onChange={(e) => setInputs({...inputs, fullname:e.target.value})}
            type="text" placeholder="FullName"
            className="input input-bordered input-info w-full max-w-lg h-10" />    
        </div>
        <div>
        <label className='label p-2'>
            <span className='text-base label-text text-gray-200'>Username</span>
          </label>
          <input 
            value={inputs.username}
            onChange={(e) => setInputs({...inputs, username:e.target.value})}
            type="text" 
            placeholder="jaskirat singh" 
            className="input input-bordered input-info w-full max-w-lg h-10" />    
        </div>
        <div>
        <label className='label p-2'>
            <span className='text-base label-text text-gray-200'>Password</span>
          </label>
          <input type="password" placeholder="Enter password" className="input input-bordered input-info w-full max-w-lg h-10"
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password:e.target.value})} 
          />    
        </div>
        <div>
        <label className='label p-2'>
            <span className='text-base label-text text-gray-200'>Confirm Password</span>
          </label>
          <input type="password" placeholder="Confirm Password" className="input input-bordered input-info w-full max-w-lg h-10" 
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs, confirmPassword:e.target.value})}
          />    
        </div>

        {/* Gender check box component here */}
        <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectGender={inputs.gender} />
        <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>already have account?</Link>
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