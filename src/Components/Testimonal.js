import React from "react";
import Slide from "./Testimonal slide";

import f from "aos"

const MyComponent = () => {
  f.init({duration:1000})
  return (
    <div
      className="relative h-[450px] flex items-center flex-col justify-center text-white"
      style={{
        backgroundImage:
          " url('https://static.spotapps.co/web/galloskitchen--com/custom/reviews_bg.jpg')",
        backgroundSize: "cover",
      }}
    >
      <h1 className="font-vast-shadow text-white text-2xl lg:text-5xl" data-aos="flip-up">
        REVIEWS
      </h1>
      <Slide/>
     
    </div>
  );
};

export default MyComponent;
