"use client";

import { useState } from "react";
import Connect from "./Connect";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center navbar">
      <img src='/logo.svg' alt="nftifyme" className="w-[90px] h-[90px]" />
      <h1 className={`font-poppins font-normal cursor-pointer text-[24px] text-white `}>NFTifyMe</h1>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 font-poppins font-normal cursor-pointer text-[16px]">
        <li className="text-white mr-10">Mint</li>
        <li className="text-white mr-10">My Mints</li>
        <li className="text-white mr-10">About Us</li>
        <Connect/>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? '/close.svg' : 'menu.svg'}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
           <li className='font-poppins font-medium cursor-pointer text-[16px] text-white mb-4'>Mint</li>
           <li className='font-poppins font-medium cursor-pointer text-[16px] text-white mb-4'>My Mints</li>
           <li className='font-poppins font-medium cursor-pointer text-[16px] text-white mb-4'>About Us</li>
           <Connect/>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
