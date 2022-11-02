import React from 'react'
import apple from '../assets/hero_apple.png'
import comment from '../assets/hero_comment.png'
import hero from '../assets/hero.png'
import Button from '../components/Button'

import { FaPlay } from 'react-icons/fa'


export function Hero() {
  return (
    <div className='flex items-center justify-center flex-wrap mt-16'>
       <div className="flex flex-col w-[36%]">
         <div className="faster mb-10 text-[#EB5757] font-semibold flex justify-between px-5 py-4 rounded-full bg-[#FEE9DE] w-52 ">
          <p >More than Faster</p>
          <img src={apple} alt="" />
         </div>

         <div className="hero-text mb-10">
          <h2 className='text-7xl text-[#333333] font-bold mb-10 leading-[90px]'>
            Be The Fastest In Delivering Your 
            <span className='text-[#EB5757]'> Food</span>
            </h2>

            <p className='text-[#333333] font-semibold leading-7 text-lg'>
              Our job is filling your tummy with 
              delicious food and with fast and free delivery

            </p>
         </div>
         <div className="action flex gap-10">
             
          <Button className="login text-lg font-bold ml-2 flex justify-center items-center text-white rounded-full bg-[#EB5757]  w-[186px] h-[70px]" >
            Get Started
           </Button>
          <Button className="login ml-2 flex justify-center items-center text-[#F2F2F2] rounded-full  w-[186px] h-[75px]" >
            <div className="rounded-full mr-3 w-10 h-10 flex justify-center items-center bg-white">
            <FaPlay className='text-sm text-[#F2C94C] '/>

            </div>
            <p className='text-black font-semibold text-lg'> Watch More</p>
           </Button>

         </div>

         <div className="comment flex mt-16">
          <img src={comment} alt="" />
         </div>
       </div>
       <div className="img">
        <img src={hero} alt="" />
       </div>
    </div>
  )
}

 