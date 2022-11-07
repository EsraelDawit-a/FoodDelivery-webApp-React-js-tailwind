import * as React from 'react';
import logo from '../assets/logo.png'
import dot from '../assets/dot.png'

import { BiSearch, BiLogIn } from 'react-icons/bi'
import { BsHandbag } from 'react-icons/bs'
import { RiMenu3Line } from 'react-icons/ri'

import Button from '../components/Button';

export function Header() {

    const menues: object = {}


    return (
        <div className='flex justify-around pt-5 items-center'>
            <div className="flex">
                <img src={logo} alt="logo" />
            </div>
            <div className="hidden md:flex">
            <div className="middle hover:cursor-pointer flex justify-between list-none font-semibold">
                <li className='px-5 active-menue'>
                    <div className="flex justify-center items-center gap-1 flex-col">
                        why Fudo?
                        <img src={dot} alt="" width="7" />
                    </div>
                </li>
                <li className='px-5' >services</li>
                <li className='px-5' >Menue</li>
                <li className='px-5' >Contact</li>


            </div>

            <div className="icons flex justify-center items-center gap-5">
                <div className="search"><BiSearch className='text-2xl font-bold mx-2' /></div>
                <div className="cart relative">
                    <BsHandbag className='text-2xl font-bold' />
                    <div className='absolute text-white   bg-[#EB5757]   -top-2 -right-2'
                        style={{
                            borderRadius: "50%",

                        }}
                    > <span className='text-[12px] p-2 '>4</span>
                    </div>
                </div>

                <Button className="login ml-2 flex justify-center items-center text-white rounded-full bg-[#EB5757]  w-[120px] h-[49px] ">

                    <BiLogIn className='mx-2' />
                    <p className='font-semibold'>Login</p>
                </Button>

            </div>
       </div>

            <div className="flex md:hidden text-3xl text-[#EB5757] font-bold hover:text-black transition-all ease-out duration-150 cursor-pointer ">
                <RiMenu3Line/>
            </div>
        </div>
    );
}
