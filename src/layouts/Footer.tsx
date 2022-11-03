import React from 'react'
import logo from '../assets/logo.png'
import { RiInstagramFill } from 'react-icons/ri'
import { CgFacebook } from 'react-icons/cg'
import { BsTwitter } from 'react-icons/bs'
import { IoSendSharp } from 'react-icons/io5'


function Footer() {
  return (
    <div className='mt-40 flex  flex-wrap justify-evenly w-11/12 px-10 mb-12'>
       <div className= "flex items-center md:items-start flex-col gap-7 md:w-1/4 my-10">
        <img src={logo} alt="" width="150" />
        <p className='text-[#333333] mx-[10%] md:mx-0 text-center md:text-start font-semibold leading-7 text-lg '>
              Our job is filling your tummy with 
              delicious food and with fast and free delivery

            </p>

            <div className="flex text-[#EB5757] text-3xl gap-5">
             <RiInstagramFill/>
             <CgFacebook/>
             <BsTwitter/>
            </div>

       </div>

       {/* About */}
       <div className="flex flex-col gap-1 font-semibold list-none my-10">
        <li className='text-lg font-bold mb-4'>About Us</li>
        <li>Features</li>
        <li>News</li>
        <li>Menue</li>
       </div>

        {/* Company */}
        <div className="flex flex-col gap-1 font-semibold list-none my-10">
        <li className='text-lg font-bold mb-4'>Why Fudo ?</li>
        <li>Partner With Us</li>
        <li>FAQ</li>
        <li>Blog</li>
       </div>

        {/* Company */}
        <div className="flex flex-col gap-1 font-semibold list-none my-10">
        <li className='text-lg font-bold mb-4'>Account</li>
        <li>Support Center</li>
        <li>Feedback</li>
        <li>Contact Us</li>
       </div>

        {/* Get in Touch*/}
        <div className="flex flex-col list-none my-10">
         <p className='text-[#333333] font-semibold leading-7 text-lg '>
          Questionns or feedback ? <br/>
          We`d love to hear from you 
          </p>

         <div className="input flex items-center justify-between mt-5 rounded-full border border-slate-600">
         <input type="text" className='py-3 mx-5 focus:ring-0 focus:outline-none border-none ' placeholder='Email Adress' />
         <IoSendSharp className='ml-3 mr-2'/>
         </div>
       </div>
    </div>
  )
}

export default Footer
