import React from 'react'
import { Carousel, } from '@trendyol-js/react-carousel';

import { RiArrowLeftSLine } from 'react-icons/ri'
import { RiArrowRightSLine } from 'react-icons/ri'

import burger from '../assets/burger.png'
import pizza from '../assets/pizza.png'
import cupcake from '../assets/cupcake.png'
import ramen from '../assets/ramen.png'
import icecream from '../assets/icecream.png'

export function Menue() {
  return (
    <div className='flex flex-col my-20' >

     {/* top */}
     <div className="flex justify-around">
      {/* left */}
      <div className="flex flex-col gap-3">
        <h5 className='text-[#EB5757] font-bold text-xl'>Our Menue</h5>
        <h1 className='font-bold text-4xl w-[70%]'>Menue That Always Makes You Fall In Love</h1>
      </div>
      <div className="flex gap-4 items-center">
        <RiArrowLeftSLine className='bg-slate-200 text-white rounded-full w-9 h-9'/>
        <RiArrowRightSLine className='bg-[#EB5757] rounded-full w-9 h-9 text-white'/>
      </div>

     </div>

     {/* bottom part */}

     <div className="flex gap-24 mx-20 mt-16 ">
      {/* left */}
      <div className="flex gap-12 ">

        <div className="items flex flex-col gap-3 ">
          <div className="flex  pl-3 pr-12 py-2 gap-3 items-center">
            <img src={burger} alt="" />
            <h5>Burger</h5>
          </div>

          
          <div className="flex  pl-3 pr-12 py-2 gap-3 items-center text-white font-bold bg-[#EB5757] rounded-full">
            <img src={pizza} alt=""  width="40" className='bg-white p-2 rounded-full' />
            <h5>pizza</h5>
          </div>

          <div className="flex  pl-3 pr-12 py-2 gap-3 items-center">
            <img src={burger} alt="" />
            <h5>pizza</h5>
          </div>

          <div className="flex  pl-3 pr-12 py-2 gap-3 items-center">
            <img src={cupcake} alt="" />
            <h5>Cupcake</h5>
          </div>

          <div className="flex  pl-3 pr-12 py-2 gap-3 items-center">
            <img src={ramen} alt="" />
            <h5>Ramen</h5>
          </div>

          <div className="flex  pl-3 pr-12 py-2 gap-3 items-center">
            <img src={icecream} alt="" />
            <h5>Ice Cream</h5>
          </div>


        </div>

        {/* pole */}
        <div className="pole relative w-1 h-full bg-slate-200">
          <div className="red absolute w-1 h-1/3 bg-[#EB5757]">

          </div>
        </div>
      </div>

      {/* right slider */}

      <div>
      <Carousel show={3.5} slide={3} swiping={true} useArrowKeys={true} >
       <div> <img src="https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=300&height=300" alt="" /></div>
       <div> <img src="https://static.toiimg.com/thumb/56933129.cms?imgsize=686279&width=300&height=300" alt="" /></div>
       

    </Carousel> 
      </div>
     </div>

      {/* */}
    </div>
  )
}


