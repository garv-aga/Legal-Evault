"use client";

import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col sm:py-16 py-6`}>
      <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Join The <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Revolution</span>{" "}
          </h1>
          <div className="ss:hidden flex justify-center items-center mr-20">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          of Digital Art.
        </h1>
        <p className={`font-poppins font-normal text-white text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
          Start minting your NFTs today and make your mark in the ever-evolving landscape of digital creativity. Embrace the future, redefine ownership, and let your art shine in the realm of NFTs. The world is waiting to discover your unique digital masterpieces.
        </p>
      </div>

      <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}>
        <img src='/robot.png' alt="nft" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[100%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      </section>
  );
};

export default Hero;