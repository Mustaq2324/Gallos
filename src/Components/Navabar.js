import React, { useState, useEffect } from "react";
import { GrInstagram } from "react-icons/gr";
import { FaYelp } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import logo1 from "../Assest/logo (1).png";
import logo from "../Assest/logo_onscroll.png";
function Navabar() {
  const [drop, setDrop] = useState(false);
  const [show, setShow] = useState(false);
  const tarns = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", tarns);
    return () => window.removeEventListener("scroll", tarns);
  }, []);

  function handledrop() {
    setDrop(!drop);
  }
  return (
    <div>
      <div className="">
        <video
          autoPlay
          id="coverVideo"
          loop
          muted
          playsInline
          poster="https://static.spotapps.co/web/galloskitchen--com/custom/video_poster.jpg"
          className="w-full h-[300px] md:h-[500px] lg:h-full  object-cover relative inset-0 z-0"
        >
          <source
            src="https://static.spotapps.co/website_videos/Gallo%27s%20Kitchen%20Bar_Vimeo720p30.m4v"
            type="video/mp4"
          />
        </video>

        {show ? (
          <div className="fixed w-full top-0 z-50 overflow-x-hidden bg-[#F7E5B3] transition-all duration-500 ">
            <div className="flex items-center justify-between">
              <img
                className="object-cover mt-1 w-[150px] lg:w-[200px] transition-all duration-500 lg:mx-auto"
                src={logo}
              />
              {/* mobile */}
              <div className=" flex justify-center items-center lg:hidden">
                <div className="h-[30px] cursor-pointer w-[30px] hover:bg-[#92553D] flex items-center justify-center">
                  <a href="https://www.instagram.com/galloskitchenua/">
                    <GrInstagram className="text-black rounded" />
                  </a>
                </div>
                <div className="h-[30px] cursor-pointer w-[30px] hover:bg-[#92553D] flex items-center justify-center ">
                  <a href="https://www.yelp.com/biz/gallos-kitchen-bar-columbus">
                    <FaYelp className="text-black rounded " />
                  </a>
                </div>
                <div>
                  <FaBars
                    onClick={handledrop}
                    className="text-black text-3xl me-2"
                  />
                </div>
              </div>
            </div>
            <div className="w-[1400px] mx-auto mt-3 lg:mt-2 h-[2px] bg-black"></div>
            {/* mobile nav */}
            <div
              className={
                drop
                  ? "h-[260px]  transition-all duration-700 w-[100%] lg:hidden "
                  : "h-0 overflow-hidden transition-all duration-700 w-[100%]  opacity-0 lg:hidden"
              }
            >
              <ul className="flex flex-col   justify-center font-[reemkufi] gap-3 overflow-hidden ">
                <li className="text-black cursor-pointer mt-2 ps-2  hover:bg-[#92553D]">
                  MENU
                </li>
                <li className="text-black cursor-pointer ps-2 hover:bg-[#92553D]">
                  DRINKS
                </li>
                <li className="text-black cursor-pointer ps-2 hover:bg-[#92553D]">
                  SPECIAL
                </li>
                <li className="text-black cursor-pointer ps-2 hover:bg-[#92553D]">
                  ORDER
                </li>
                <li className="text-black cursor-pointer ps-2 hover:bg-[#92553D]">
                  EVENTS
                </li>
                <li className="text-black cursor-pointer ps-2 hover:bg-[#92553D]">
                  GIFT CARDS
                </li>
                <li className="text-black cursor-pointer ps-2 hover:bg-[#92553D]">
                  JOBS
                </li>
              </ul>
            </div>
            {/* laptop  */}
            <div className="mt-1 lg:flex items-center justify-center hidden pb-2 ">
              <ul className="flex gap-5 justify-center text-lg items-center ">
                <li className="text-black cursor-pointer hover:text-[#92553D]">
                  MENU
                </li>
                <li className="text-black cursor-pointer hover:text-[#92553D]">
                  DRINKS
                </li>
                <li className="text-black cursor-pointer hover:text-[#92553D]">
                  SPECIAL
                </li>
                <li className="text-black cursor-pointer hover:text-[#92553D]">
                  ORDER
                </li>
                <li className="text-black cursor-pointer hover:text-[#92553D]">
                  EVENTS
                </li>
                <li className="text-black cursor-pointer hover:text-[#92553D]">
                  GIFT CARDS
                </li>
                <li className="text-black cursor-pointer hover:text-[#92553D]">
                  JOBS
                </li>
                <div className="h-[30px] cursor-pointer w-[30px] hover:bg-[#92553D] flex items-center justify-center">
                  <a href="https://www.instagram.com/galloskitchenua/">
                    <GrInstagram className="text-black rounded" />
                  </a>
                </div>
                <div className="h-[30px] cursor-pointer w-[30px] hover:bg-[#92553D] flex items-center justify-center ">
                  <a href="https://www.yelp.com/biz/gallos-kitchen-bar-columbus">
                    <FaYelp className="text-black rounded " />
                  </a>
                </div>
              </ul>
            </div>
          </div>
        ) : (
          <div className="fixed w-full top-0 z-10 overflow-x-hidden transition-all duration-500 ">
            <div className="flex items-center justify-between">
              <img
                className="object-cover mt-2 w-[150px] lg:w-[250px] transition-all duration-500 lg:mx-auto"
                src={logo1}
              />
              {/* mobile */}
              <div className="flex justify-center items-center lg:hidden">
                <div className="h-[30px] cursor-pointer w-[30px] hover:bg-[#92553D] flex items-center justify-center">
                  <a href="https://www.instagram.com/galloskitchenua/">
                    <GrInstagram className="text-white rounded" />
                  </a>
                </div>
                <div className="h-[30px] cursor-pointer w-[30px] hover:bg-[#92553D] flex items-center justify-center ">
                  <a href="https://www.yelp.com/biz/gallos-kitchen-bar-columbus">
                    <FaYelp className="text-white rounded " />
                  </a>
                </div>
                <div>
                  <FaBars
                    onClick={handledrop}
                    className="text-white text-3xl me-2"
                  />
                </div>
              </div>
            </div>
            <div className="w-[1400px] mx-auto mt-3 lg:mt-4 h-[2px] bg-white"></div>
            {/* mobile nav */}
            <div
              className={
                drop
                  ? "h-[260px] transition-all duration-1000 w-[100%] bg-black bg-opacity-[0.6] lg:hidden"
                  : "h-0 transition-all duration-1000 w-[100%] bg-black opacity-0 lg:hidden overflow-hidden"
              }
            >
              <ul className="flex flex-col   justify-center font-[reemkufi] gap-3 ">
                <li className="text-white cursor-pointer mt-2 ps-2  hover:bg-[#92553D]">
                  MENU
                </li>
                <li className="text-white cursor-pointer ps-2 hover:bg-[#92553D]">
                  DRINKS
                </li>
                <li className="text-white cursor-pointer ps-2 hover:bg-[#92553D]">
                  SPECIAL
                </li>
                <li className="text-white cursor-pointer ps-2 hover:bg-[#92553D]">
                  ORDER
                </li>
                <li className="text-white cursor-pointer ps-2 hover:bg-[#92553D]">
                  EVENTS
                </li>
                <li className="text-white cursor-pointer ps-2 hover:bg-[#92553D]">
                  GIFT CARDS
                </li>
                <li className="text-white cursor-pointer ps-2 hover:bg-[#92553D]">
                  JOBS
                </li>
              </ul>
            </div>
            {/* laptop  */}
            <div className="mt-3 lg:flex items-center justify-center hidden ">
              <ul className="flex gap-5 justify-center text-lg items-center">
                <li className="text-white cursor-pointer hover:text-[#92553D]">
                  MENU
                </li>
                <li className="text-white cursor-pointer hover:text-[#92553D]">
                  DRINKS
                </li>
                <li className="text-white cursor-pointer hover:text-[#92553D]">
                  SPECIAL
                </li>
                <li className="text-white cursor-pointer hover:text-[#92553D]">
                  ORDER
                </li>
                <li className="text-white cursor-pointer hover:text-[#92553D]">
                  EVENTS
                </li>
                <li className="text-white cursor-pointer hover:text-[#92553D]">
                  GIFT CARDS
                </li>
                <li className="text-white cursor-pointer hover:text-[#92553D]">
                  JOBS
                </li>
                <div className="h-[30px] cursor-pointer w-[30px] hover:bg-[#92553D] flex items-center justify-center">
                  <a href="https://www.instagram.com/galloskitchenua/">
                    <GrInstagram className="text-white rounded" />
                  </a>
                </div>
                <div className="h-[30px] cursor-pointer w-[30px] hover:bg-[#92553D] flex items-center justify-center ">
                  <a href="https://www.yelp.com/biz/gallos-kitchen-bar-columbus">
                    <FaYelp className="text-white rounded " />
                  </a>
                </div>
              </ul>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Navabar;
