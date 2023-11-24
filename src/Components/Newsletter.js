import React from "react";
import chicken from "../Assest/Rooster-Background-PNG.png";

function Newsletter() {
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="bg-[#F7E5B3] h-[500px] w-full flex justify-center items-center ">
        <div className=" flex justify-center  flex-col  h-full gap-8 items-center lg:items-start ">
          <h1 className="font-vast-shadow text-black text-2xl  lg:text-5xl">
            NEWSLETTER
          </h1>
          <p className="font-[Antonio] text-center lg:text-start">
            Sign up for our newsletter & get exclusive offers and invites!
          </p>
          <form className="flex gap-3 flex-col lg:flex-row">
            <div>
                <input type="email" className="border-none outline-none bg-[#F7E5B3] placeholder:text-black placeholder:font-[Antonio]" placeholder="Your Email ....."/>
                <div className="lg:w-[300px] w-[220px] h-[1px] bg-black mt-3"></div>
            </div>
            <div className=' mx-auto '>
        <button type="button" className='px-5 font-[reemkufi] font-semibold py-2  hover:bg-black hover:text-[#e8af3e] bg-[#E8AF3E]'>SUMBIT</button>
      </div>
          </form>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.196927181897!2d-83.09040139999999!3d40.0263825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838921ca83d4847%3A0x5293b3571a36a31b!2s2820%20Nottingham%20Rd%2C%20Columbus%2C%20OH%2043221%2C%20USA!5e0!3m2!1sen!2sin!4v1700823746296!5m2!1sen!2sin"
          
          height="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" className="w-full lg:w-[700px]"
        ></iframe>
      </div>
    </div>
  );
}

export default Newsletter;
