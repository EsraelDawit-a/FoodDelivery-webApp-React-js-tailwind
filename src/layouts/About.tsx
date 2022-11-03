import React from 'react'

import order from '../assets/order.png'
import delivery from '../assets/delivery.png'
import quality from '../assets/quality.png'

export function About() {
  return (
    <div className='flex flex-col my-12 '>

        <div className="flex  justify-self-center text-center mb-16 flex-col items-center">
            <h5 className='mb-5 text-[#EB5757] text-xl font-semibold'> What We Serve</h5>
            <h2 className='text-3xl md:text-5xl font-bold md:w-[500px]'>
                Your Favorite Food 
                Delivery Partner</h2>
        </div>


        {/* vector description  */}

        <div className="flex flex-col sm:flex-row flex-wrap justify-around md:gap-3 items-center">
            <div className="order flex flex-col items-center justify-center ">
                <img src={order} alt="" />
                <h3 className='text-2xl md:text-3xl font-bold my-2'>Easy To Order</h3>
                <p className='w-[300px] text-center text-[#333333] font-semibold leading-7 text-lg'>You only need a few steps in ordering food</p>
            </div>

            <div className="order flex flex-col items-center justify-center mt-12">
                <img src={delivery} alt="" />
                <h3 className='text-2xl md:text-3xl font-bold my-2'>Fastest Delivery</h3>
                <p className='w-[300px] text-center text-[#333333] font-semibold leading-7 text-lg'>Delivery that is always ontime even faster</p>
            </div>

            <div className="order flex flex-col items-center justify-center mt-12">
                <img src={quality} alt="" />
                <h3 className='text-2xl md:text-3xl font-bold my-2'>Best Quality</h3>
                <p className='w-[300px] text-center text-[#333333] font-semibold leading-7 text-lg'>Not only fast for us quality is also number one</p>
            </div>

            


        </div>
      
    </div>
  )
}


