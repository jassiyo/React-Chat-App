import React from 'react'
import { FaSearch } from "react-icons/fa";


const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input type="text" placeholder="Search..." className="input input-bordered rounded-full w-24 md:w-auto" />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
      <FaSearch className='outline-none w-5 h-5'/>
      </button>
    </form> 
    )
}

export default SearchInput