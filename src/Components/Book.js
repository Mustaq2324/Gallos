import React from "react";
import logo from "../Assest/opentable.png"
import { IoPersonOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6"

function Book() {
  return (
    <div>
      <div className="bg-[#F7E5B3]   w-full">
        <div className=" flex items-center justify-center pt-8 flex-col  h-full gap-3">
          <h1 className="font-vast-shadow text-black text-2xl pt-5 lg:pt-0 lg:text-5xl">
            RESERVATIONS
          </h1>
          <p className="font-[Antonio] text-center lg:text-start">
            Call us at <span className="underline">(614)-754-8176</span> or book
            a table through Open Table:
          </p>
          <div className="mt-5 flex flex-col items-center lg:block bg-white lg:bg-[#F7E5B3] px-4 pt-4 overflow-hidden">
            <p className="text-gray-800 font-semibold text-lg mb-2">Find a Table</p>
            <form className="flex flex-col lg:flex-row ">
              <div className="flex items-center justify-center cursor-pointer gap-1 bg-white h-[40px] w-[230px] px-2 border-2 ">
                <label htmlFor="register">
                  {" "}
                  <IoPersonOutline className="text-lg cursor-pointer" />
                </label>
                <select className="mx-auto outline-none border-none w-full bg-none cursor-pointer">
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5 People</option>
                  <option>6 People</option>
                  <option>7 People</option>
                  <option>8 People</option>
                  <option>9 People</option>
                  <option>10 People</option>
                  <option>11 People</option>
                  <option>12 People</option>
                  <option>13 People</option>
                  <option>14 People</option>
                  <option>15 People</option>
                  <option>16 People</option>
                  <option>17 People</option>
                  <option>18 People</option>
                  <option>19 People</option>
                  <option>20 People</option>
                </select>
              </div>
              <div className="flex items-center justify-center cursor-pointer gap-1 bg-white h-[40px] w-[230px] px-3 border-2 ">
                <input
                  className="mx-auto outline-none border-none w-full bg-none cursor-pointer"
                  placeholder="sadonka"
                  type="date"
                />
              </div>
              <div className='flex items-center cursor-pointer justify-center gap-1 bg-white h-[40px] w-[230px] px-2 border-2 '>
              <label htmlFor="register" >  <FaRegClock className='text-lg cursor-pointer' /></label>
                <select className='mx-auto outline-none border-none w-full bg-none cursor-pointer'>
                    <option>Now</option>
                    <option>12.30 Pm</option>
                    <option>01.00 Pm</option>
                    <option>01.30 Pm</option>
                    <option>02.00 Pm</option>
                    <option>02.30 Pm</option>
                    <option>03.00 Pm</option>
                    <option>03.30 Pm</option>
                    <option>04.00 Pm</option>
                    <option>04.30 Pm</option>
                    <option>05.00 Pm</option>
                    <option>05.30 Pm</option>
                    <option>06.00 Pm</option>
                    <option>06.30 Pm</option>
                    <option>07.00 Pm</option>
                    <option>07.30 Pm</option>
                    <option>08.00 Pm</option>
                    <option>08.30 Pm</option>
                    <option>09.00 Pm</option>
                </select>
                </div>
                <div className="bg-[#DA3743] flex items-center justify-center hover:bg-opacity-60 cursor-pointer h-[40px] w-[200px] px-2">
                    <button  className=" text-white" type="button">Find a Table</button>
                </div>
            </form>
            <img className="text-start w-[100px]" src={logo}/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Book;
