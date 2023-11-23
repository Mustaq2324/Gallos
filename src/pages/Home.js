import React from 'react'
import Navabar from "../Components/Navabar"
import Gallery from "../Components/Gallery"
import Address from '../Components/Address'
import About from '../Components/About'
import Order from '../Components/Order'
import Book from '../Components/Book'
import Carousel from '../Components/Carousel'
function Home() {
  return (
    <div className='overflow-x-hidden'>
        <Navabar/>
        <Address/>
        <About/>
        <Order/>
   <Gallery/>
   <Book/>
   <Carousel/>
    </div>
  )
}

export default Home