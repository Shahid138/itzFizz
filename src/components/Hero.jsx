import React, { useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.to("h1", {
      opacity: 1,
      duration: 1,
      y: -30,
      delay: 1,
      stagger: 0.5,
    });
  }, []);

  return (
    <div className="h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="flex justify-between items-center p-8 bg-[#202120] text-white">
        <img src="./public/logo.svg" className="flex space-x-4" alt="logo" />
        <div className="flex text-lg font-area1 space-x-20">
          <a href="#about" className="hover:text-gray-400">
            Our vision
          </a>
          <a href="#services" className="hover:text-gray-400">
            Our team
          </a>
          <a href="#portfolio" className="hover:text-gray-400">
            Our projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact us
          </a>
          <a href="#blog" className="hover:text-gray-400">
            FR/EN
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center font-area font-extrabold text-9xl text-white gap-2 h-screen">
        <div className="flex flex-col items-center">
          <h1>IMAGINING</h1>
          <h1>UNIQUE</h1>
          <h1>CONCEPTS</h1>
          <h1>AND DIGITAL</h1>
          <h1>EXPERIENCES</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
