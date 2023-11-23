import React from 'react'
import Navabar from "../Components/Navabar"
import Gallery from "../Components/Gallery"
import Address from '../Components/Address'
import About from '../Components/About'
import Order from '../Components/Order'
import Book from '../Components/Book'
function Home() {
  return (
    <div className='overflow-x-hidden'>
        <Navabar/>
        <Address/>
        <About/>
        <Order/>
   <Gallery/>
   <Book/>
    </div>
  )
}

export default Home