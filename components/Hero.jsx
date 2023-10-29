"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col sm:py-16 py-6 mt-20`}
    >
      <div
        className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-[white] ss:leading-[80.8px] leading-[75px]">
            Unlocking The <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Future</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80.8px] leading-[75px] w-full">
          of Legal Records.
        </h1>
        <p
          className={`font-poppins font-normal text-white text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          Join us on the journey to redefine legal record-keeping in the digital
          era - where security, transparency, and accessibility converge.
        </p>
      </div>

      <div
        className={`flex justify-between items-center md:my-0 sm:mx-0 mx-10 my-10 relative`}
      >
        <Image
          src="/ELV.jpg"
          alt="nft"
          className="relative z-[5] rounded-3xl"
          width={500}
          height={500}
        />

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-10 pink__gradient" />
        <div className="absolute z-[1] w-[100%] h-[40%] rounded-full white__gradient   bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-0 bottom-0 blue__gradient" /> */}
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
