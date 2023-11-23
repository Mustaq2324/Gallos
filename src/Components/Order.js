import React from 'react'
import logo from "../Assest/order.png"
function Order() {
  return (
    <div>
        <div className='bg-[#F7E5B3] h-[350px] w-full' >
        <div className=' flex items-center justify-center flex-col h-full gap-3'>
        <h1 className='font-vast-shadow text-black text-2xl pt-5 lg:pt-0 lg:text-5xl'>ORDER ONLINE</h1>
        <h2 className='font-[reemkufi] text-xl font-semibold'>PICK UP YOUR FAVORITE FOOD</h2>
        <p className='font-[Antonio] text-center lg:text-start'>Don`t feel like cooking today? We got you covered - order now!</p>
        <a href='https://order.toasttab.com/online/gallos-kitchen-ua-2820-nottingham-road'>
        <img className='w-[150px] hover:scale-[1.2] cursor-pointer transition-all duration-700' src={logo}/>
        </a>
        </div>
        </div>
    </div>
  )
}

export default Order