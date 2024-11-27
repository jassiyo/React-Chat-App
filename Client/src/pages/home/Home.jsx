import React from 'react'
import SideBar from '../../component/sidebar/SideBar'
import MessageContainer from '../../component/messageContainer/MessageContainer'

const Home = () => {
  return (
    <>
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding
    backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <SideBar/>
      <div className='divider p-2'></div>
      <MessageContainer/>
    </div>
    </>
  )
}

export default Home