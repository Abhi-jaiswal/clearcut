import React from 'react'
import { LuFacebook } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { CgInstagram } from "react-icons/cg";
import { BsDribbble } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='text-[#60637B]'>
      <div className='mx-[144px] mt-[96px] px-[48px] flex justify-between'>
        <div className='w-[528px] flex flex-col'>
          <div className='text-[20px]'>
          Got a Project?
          </div>

          <div className='animation2 flex hover:cursor-pointer '>
            <div className='w-[8px] h-[66.24px] bg-[#60637B]'></div>
            <div className='my-auto text-[30px] text-bold pl-[12px] text-[#A3A5B8]'>
              Get in Touch
            </div>
          </div>
        </div>

        <div className='w-[528px] flex flex-col items-end'>
          <div>
            <img src='./logo.svg' className='w-[200px] h-[48px] hover:opacity-90 cursor-pointer'/>
          </div>
          <div className='mt-[32px] flex text-[#A3A5B8] '>
            <a className='ml-[32px] hover:scale-90 cursor-pointer transition-all duration-500'>
            <LuFacebook className='w-[28px] h-[28px]'/>
            </a>
            <a className='ml-[32px] hover:scale-90 cursor-pointer transition-all duration-500'>
            <FiLinkedin className='w-[29.48px] h-[28px]'/>
            </a>
            <a className='ml-[32px] hover:scale-90 cursor-pointer transition-all duration-500'>
            <FiTwitter className='w-[34.03px] h-[28px]'/>
            </a>
            <a className='ml-[32px] hover:scale-90 cursor-pointer transition-all duration-500'>
            <CgInstagram className='w-[28px] h-[28px]'/>
            </a>
            <a className='ml-[32px] hover:scale-90 cursor-pointer transition-all duration-500'>
            <BsDribbble className='w-[28px] h-[28px]'/>
            </a>
          </div>
        </div>
      </div>

      <div className='mx-[144px] mt-[80px] pb-[30px] px-[48px] flex text-[#A3A5B8] text-[14px] justify-between'>
        <div className='w-[528px]'>
        © Copyright 2019
        </div>

        <div className='w-[528px] text-right'>
        C/o Cuboft Marketing & Software Solutions Pvt. Ltd. <br/>
        CIN: U72200TG2015PTC101100
        </div>
      </div>
    </div>
  )
}

export default Footer
