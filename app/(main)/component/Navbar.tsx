'use client'
import { useState, useEffect } from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'


const montserrat = Montserrat({
  subsets: ['latin'], // Supports Latin characters
  weight: ['400', '600', '700'], // Choose the font weights you need
  variable: '--font-montserrat', // CSS variable (optional)
})

const Navbar = () => {
  
  return (
    <>
      <div className="h-[70px] flex items-center justify-between px-10 lg:px-20 shadow-md">
        <div
          className={`${montserrat.className} text-white font-semibold text-xl`}
        >
          Extreme
        </div>
        <div
          className={`${montserrat.className} lg:flex hidden gap-6 font-semibold text-white`}
        >
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Pricing</h1>
          <h1>Contact</h1>
        </div>
        <div className="lg:flex hidden gap-4">
          <button
            className={`bg-[#FFD700] text-black rounded-[50px] font-semibold text-[13px] w-[74px] h-[30px] hover:bg-black hover:text-[#FFD700] transition-all duration-300 ease-in-out ${montserrat.className}`}
          >
            Sign up
          </button>
          <button
            className={`bg-[#FFD700] text-black rounded-[50px] font-semibold text-[13px] w-[74px] h-[30px] hover:bg-black hover:text-[#FFD700] transition-all duration-300 ease-in-out ${montserrat.className}`}
          >
            Sign in
          </button>
        </div>
        <div className='lg:hidden block'>
          <Image src={'/menu-icon.svg'} alt='menu-icon' width={50} height={50} className='w-[30px] h-[50px]'/>
        </div>
      </div>
    </>
  )
}

export default Navbar
