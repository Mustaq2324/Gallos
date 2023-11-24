import React from 'react'
import Navabar from "../Components/Navabar"
import Gallery from "../Components/Gallery"
import Address from '../Components/Address'
import About from '../Components/About'
import Order from '../Components/Order'
import Book from '../Components/Book'
import Carousel from '../Components/Carousel'
import MyComponent from '../Components/Testimonal'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
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
   <MyComponent/>
   <Newsletter/>
   <Footer/>
    </div>
  )
}

export default Home