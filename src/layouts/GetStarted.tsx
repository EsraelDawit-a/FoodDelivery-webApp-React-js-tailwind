import React from 'react'
import Button from '../components/Button'
import getstarted from '../assets/getstarted.png'

export function GetStarted() {
  return (
    <div className='mt-10 flex flex-wrap  justify-around items-center'>
        <div className="px-10 max-h-[600px] flex flex-col sm:flex-row shrink-1 py-10  bg-[#ffe2e2] rounded-lg ">
          <div className="left px-2 flex flex-col gap-4 md:w-1/2 mt-[10%]">
            <h5 className='text-[#EB5757] font-bold text-xl'>Download The App</h5>
            <h1 className='text-3xl font-bold md:text-5xl'>Get Started With Fudo Today!</h1>
            <p className='text-[#333333] font-semibold' >Discover food wherever and whenever and get
               your food delivery quickly.</p>

               <Button className="login text-md font-bold ml-2 mt-10 flex justify-center items-center text-white rounded-full bg-[#EB5757]  w-[156px] h-[55px]" >
            Get The App
           </Button>
          </div>

                  {/* right */}

        <div className=" right mt-12 sm:mt-0 -mr-10 flex justify-self-end">
           <img src={getstarted} alt="" className='w-full h-fit' />
        </div>
        </div>


    </div>
  )
}

