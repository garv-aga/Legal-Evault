"use client";

import React from 'react';


const Form = () => {
  return (
    <div className='flex justify-center items-center w-full'>
      <div>
        <h1 className="font-poppins font-semibold ss:text-[40px] text-[35px] text-white ss:leading-[100.8px] leading-[75px]">Start <span className="text-gradient">Minting</span> Now
        </h1>
      </div>
      <div>
        <img src='/down.svg' alt="down" className='ml-2 mt-5 w-[50px] h-[50px] animate-y-axis'/>
      </div>
    </div>
  )
}

export default Form