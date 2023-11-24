import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
export default function Slide() {
    const swiperSlideStyles = {
       
        display: "flex",
        alignItems: "center",
        flexDirection: "column" 
      };

  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper absolute h-[250px] w-[250px] lg:w-[800px]  mt-10 pb-10 flex justify-center items-center "
      >
        <SwiperSlide style={swiperSlideStyles} className="lg:gap-5 gap-3 text-white">
          <h2 className="font-[reemkufi] text-lg lg:text-2xl">REVIEW BY -YELP</h2>
          <h3 className="font-[Antonio]">MICHELLE M: <span className="text-sm">⭐⭐⭐⭐⭐</span></h3>
          <p className="font-[Antonio] lg:text-lg text-center  lg:w-[550px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            corrupti placeat fuga maiores voluptatum assumenda ipsum cupiditate
            optio at reprehenderit.
          </p>
        </SwiperSlide>
        <SwiperSlide style={swiperSlideStyles} className="gap-5 text-white">
          <h2 className="font-[reemkufi] text-lg lg:text-2xl">REVIEW BY -YELP</h2>
          <h3 className="font-[Antonio]">Antonio M: <span className="text-sm">⭐⭐⭐⭐⭐</span></h3>
          <p className="font-[Antonio] lg:text-lg text-center  lg:w-[550px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            corrupti placeat fuga maiores voluptatum assumenda ipsum cupiditate
            optio at reprehenderit.
          </p>
        </SwiperSlide>
        <SwiperSlide style={swiperSlideStyles} className="gap-5 text-white">
          <h2 className="font-[reemkufi] text-lg lg:text-2xl">REVIEW BY -YELP</h2>
          <h3 className="font-[Antonio]">Mike M: <span className="text-sm">⭐⭐⭐⭐⭐</span></h3>
          <p className="font-[Antonio] lg:text-lg text-center  lg:w-[550px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            corrupti placeat fuga maiores voluptatum assumenda ipsum cupiditate
            optio at reprehenderit.
          </p>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
