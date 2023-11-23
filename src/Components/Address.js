import React from 'react'
import { MdLocationPin } from "react-icons/md";
function Address() {
  return (
    <div className=''>
        <div className='bg-[#F7E5B3] h-[100px] w-full'>
            <h1 className='font-[reemkufi] font-bold lg:text-xl text-xs gap-2 flex flex-col lg:flex-row text-center justify-center items-center mx-auto h-full'><span><MdLocationPin  className='text-[#834A2C] hover:text-black'/> </span> 2820 NOTTINGHAM ROAD, COLUMBUS, OH 43221</h1>
        </div>
    </div>
  )
}

export default Address