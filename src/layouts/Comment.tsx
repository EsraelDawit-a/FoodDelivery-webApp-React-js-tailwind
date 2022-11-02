import React from 'react'
import shef from '../assets/shef.png'
import review from '../assets/review.png'

export function Comment() {
  return (
    <div className='flex justify-evenly mt-10 items-center'>

        <div className="shef">
            <img src={shef} alt="" />
        </div>


        <div className="comment w-[500px] -mt-20 text-start  flex flex-col justify-between items-start gap-4">

            <h5 className='text-lg font-bold  text-[#EB5757]'>WHAT THEY SAY</h5>
            <h2 className='text-5xl leading-[60px] font-bold'>What Our Customers Say About Us</h2>
               
              <p className=' text-xl mb-10 font-semibold text-[#333333]'>
              “Fudo is the best. Besides the many and delicious meals, 
              the service is also very good, especially in the very  
              fast delivey. I highly recommend Fudo  to you”.
              </p>

              <div className="review">
                <img src={review} alt="" />
              </div>
        </div>
      
    </div>
  )
}

