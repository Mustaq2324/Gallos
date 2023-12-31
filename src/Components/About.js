import React from 'react';
import img from "../Assest/img.png";
import wallpaper from "../Assest/wallpaper.jpg";
import chicken from "../Assest/chicken.png"
import {LuChevronsUp} from "react-icons/lu"
import f from "aos"
import { useState,useEffect } from 'react';
function About() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  f.init({duration:1000})
  return (
    
    <div className=''>
      <div
        className={`fixed h-[40px] flex items-center justify-center w-[40px] bg-[#E8AF3E] rounded-full bottom-4 text-4xl right-4 z-30 ${
          isVisible ? "visible" : "hidden"
        }`}
        onClick={handleScrollToTop}
        style={{ cursor: "pointer" }}
      >
        <LuChevronsUp className="text-black" />
      </div>
     <div className='grid grid-rows-1 lg:grid-cols-2 ' >
  <div data-aos="fade-up-right">
    <img className='object-cover' src={img} alt="Description"  />
    
  </div>
  <div  className=' text-center lg:px-10 bg-no-repeat bg-cover' style={{  backgroundImage: " url('https://static.spotapps.co/web/galloskitchen--com/custom/reviews_bg.jpg')"}}>
    <div className='flex flex-col items-center justify-center h-full gap-3'>
      <h1 data-aos="fade-down-left" className='font-vast-shadow text-white text-2xl pt-5 lg:pt-0 lg:text-5xl'>ABOUT US</h1>
      <img data-aos="fade-down-right" className='mx-auto w-[100px] lg:w-[150px]' src={chicken} alt="Chicken" />
      <p data-aos="fade-up-right"  className='text-center text-white font-[Antonio] text-[17px] w-[270px] lg:w-[560px] lg:text-lg mx-auto'>
        The Gallo name has been synonymous with a family business in Central Ohio for generations. Brothers Tommy and Nick, along with their cousin Larry, continued this legacy, opening Gallo’s Tap Room on Bethel Road in 2004. With the success of the Tap Room, they looked to open another restaurant concept, Gallo’s Kitchen + Bar.
      </p>
      <div data-aos="fade-up-left" className='pb-10 lg:pb-0'>
        <button className='px-7 font-[reemkufi] font-semibold py-2 rounded hover:bg-black hover:text-[#e8af3e] bg-[#E8AF3E]'>READ MORE</button>
      </div>
    </div>
  </div>
 
</div>


</div>
  );
}

export default About;
