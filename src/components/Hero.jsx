import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const imagesRef = useRef([]);
  const textRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import('gsap')).default;
      
      tlRef.current = gsap.timeline({ paused: true });
    
      imagesRef.current.forEach((img, index) => {
        if (!img) return;
        
        tlRef.current.to(img, {
          ease: "power2.inOut"
        }, 0);
      });

      tlRef.current.to('.hero-text', {
        color: 'transparent',
        webkitTextStroke: '0.4px rgba(255, 255, 255, 0.95)',
        ease: "power2.inOut"
      }, 0);
    };

    loadGSAP();
  }, []);

  const handleMouseEnterTopLeft = () => {
    if (tlRef.current) {
      tlRef.current.play();
    }
  };
  const handleMouseEnterTopRight = () => {
    if (tlRef.current) {
      tlRef.current.play();
    }
  };
  const handleMouseEnterBottomRight = () => {
    if (tlRef.current) {
      tlRef.current.play();
    }
  };
  const handleMouseEnterBottomLeft = () => {
    if (tlRef.current) {
      tlRef.current.play();
    }
  };

  const handleMouseLeaveTopLeft = () => {
    if (tlRef.current) {
      tlRef.current.reverse();
    }
  };
  const handleMouseLeaveTopRight = () => {
    if (tlRef.current) {
      tlRef.current.reverse();
    }
  };
  const handleMouseLeaveBottomRight = () => {
    if (tlRef.current) {
      tlRef.current.reverse();
    }
  };
  const handleMouseLeaveBottomLeft = () => {
    if (tlRef.current) {
      tlRef.current.reverse();
    }
  };

  return (
    <div className="h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="flex justify-between items-center p-8 bg-[#202120] text-white">
        <img src="./public/logo.svg" className="flex space-x-4" alt="logo" />
        <div className="flex space-x-20 text-xl font-helvetica">
          <a href="#about" className="hover:text-gray-400 font-semibold">Our vision</a>
          <a href="#services" className="hover:text-gray-400 font-semibold">Our team</a>
          <a href="#portfolio" className="hover:text-gray-400 font-semibold">Our projects</a>
          <a href="#contact" className="hover:text-gray-400 font-semibold">Contact us</a>
          <a href="#blog" className="hover:text-gray-400 font-semibold">
            FR/EN
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </a>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center h-screen">
        <img
          ref={el => imagesRef.current[0] = el}
          src="/top_left.png" 
          alt="Top Left" 
          className="corner-image absolute top-[215px] left-[365px] h-50 w-80 object-cover cursor-pointer]"
          onMouseEnter={handleMouseEnterTopLeft}
          onMouseLeave={handleMouseLeaveTopLeft}
        />
        <img 
          ref={el => imagesRef.current[1] = el}
          src="/top_right.png" 
          alt="Top Right" 
          className="corner-image absolute top-[120px] right-[400px] h-40 w-80 object-cover cursor-pointer"
          onMouseEnter={handleMouseEnterTopRight}
          onMouseLeave={handleMouseLeaveTopRight}
        />
        <img 
          ref={el => imagesRef.current[2] = el}
          src="/bottom_left.png" 
          alt="Bottom Left" 
          className="corner-image absolute bottom-[115px] left-[380px] h-50 w-80 object-cover cursor-pointer"
          onMouseEnter={handleMouseEnterBottomLeft}
          onMouseLeave={handleMouseLeaveBottomLeft}
        />
        <img 
          ref={el => imagesRef.current[3] = el}
          src="/bottom_right.jpg" 
          alt="Bottom Right" 
          className="corner-image absolute bottom-[195px] right-[390px] h-50 w-80 object-cover cursor-pointer"
          onMouseEnter={handleMouseEnterBottomRight}
          onMouseLeave={handleMouseLeaveBottomRight}
        />

        <div ref={textRef} className="flex flex-col items-center text-container">
          <h1 className="hero-text font-extrabold text-white font-phonk text-9xl z-[+1]">IMAGINING</h1>
          <h1 className="hero-text font-extrabold text-white font-phonk text-9xl z-[+1]">UNIQUE</h1>
          <h1 className="hero-text font-extrabold text-white font-phonk text-9xl z-[+1]">CONCEPTS</h1>
          <h1 className="hero-text font-extrabold text-white font-phonk text-9xl z-[+1]">AND DIGITAL</h1>
          <h1 className="hero-text font-extrabold text-white font-phonk text-9xl z-[+1]">EXPERIENCES</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;