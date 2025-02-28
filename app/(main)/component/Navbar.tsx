'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { openAbout } from '../store/modalSlice'
import { closeMenubar, toggleSwitch } from '../store/menubarSlice'
import { FaXmark } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const Navbar = () => {
  const menubarOpen = useAppSelector((state) => state.menubar.menubarOPen)
  const dispatch = useAppDispatch()

  const handleOpenAbout = () => {
    dispatch(openAbout())
  }

  const handleSwitch = () => {
    dispatch(toggleSwitch())
  }

  const handleCloseMenubar = () => {
    dispatch(closeMenubar())
  }

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const sidebarVariants = {
    hidden: {
      opacity: 0,
      x: '-100%',
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }
  return (
    <>
      <div className="h-[70px flex flex-col fixed top-0 right-0 left-0 px-10 py-4 lg:px-20 shadow-md z-10 bg-[#2E4053]">
        <div className="flex items-center justify-between">
          <div className={`text-white font-semibold text-xl`}>Extreme</div>
          <div className={`lg:flex hidden gap-6 font-semibold text-white`}>
            <Link href={'/'}>Home</Link>
            <h1 onClick={() => handleOpenAbout()} className="cursor-pointer">
              About Us
            </h1>
            <h1>Pricing</h1>
            <Link href="#contact" scroll={true}>
              <h1 className="cursor-pointer">Contact</h1>
            </Link>
          </div>
          <div className="lg:flex hidden gap-4">
            <Link
              href={'/signup'}
              className="bg-[#FFD700] text-black rounded-[50px] font-semibold text-[13px] w-[74px] h-[30px] hover:bg-black hover:text-[#FFD700] transition-all duration-300 ease-in-out flex items-center justify-center"
            >
              Sign up
            </Link>
            <Link
              href={'/login'}
              className="bg-[#FFD700] text-black rounded-[50px] font-semibold text-[13px] w-[74px] h-[30px] hover:bg-black hover:text-[#FFD700] transition-all duration-300 ease-in-out flex items-center justify-center"
            >
              Sign in
            </Link>
          </div>
          <div className="lg:hidden block">
            {menubarOpen ? (
              <FaXmark
                onClick={() => handleSwitch()}
                className="text-white h-[30px] w-[30px] hover:bg-[#fab702] hover:text-black transition-all duration-300 ease cursor-pointer"
              />
            ) : (
              <Image
                onClick={() => handleSwitch()}
                src={'/menu-icon.svg'}
                alt="menu-icon"
                width={50}
                height={50}
                className="w-[30px] h-[30px] transition-all duration-300 ease cursor-pointer"
              />
            )}
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate={menubarOpen ? 'visible' : 'hidden'}
          variants={sidebarVariants}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={`flex lg:hidden flex-col items-start text-white text-md gap-2 font-semibold overflow-hidden transition-all duration-500 ease-in-out ${
            menubarOpen
              ? 'max-h-[100%] opacity-100 pb-10 mt-4'
              : 'max-h-0 opacity-0'
          }`}
        >
          <Link href={'/'} onClick={() => handleCloseMenubar()}>
            <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease mt-4">
              Home
            </h1>
          </Link>
          <div className="w-full h-[1px] border-t border-t-white"></div>
          <h1
            onClick={() => {
              handleCloseMenubar(), handleOpenAbout()
            }}
            className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease mt-4"
          >
            About Us
          </h1>
          <div className="w-full h-[1px] border-t border-t-white"></div>
          <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease mt-4">
            Book Flight
          </h1>
          <div className="w-full h-[1px] border-t border-t-white"></div>
          <h1
            onClick={() => {
              handleScrollToContact(), handleCloseMenubar()
            }}
            className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease mt-4"
          >
            Contact
          </h1>
          <div className="w-full h-[1px] border-t border-t-white"></div>
          <Link href={'/signup'} onClick={() => handleCloseMenubar()}>
            <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease mt-4">
              Sign Up
            </h1>
          </Link>
          <div className="w-full h-[1px] border-t border-t-white"></div>
          <Link href={'/login'} onClick={() => handleCloseMenubar()}>
            <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease mt-4">
              Sign In
            </h1>
          </Link>
          <div className="w-full h-[1px] border-t border-t-white"></div>
        </motion.div>
      </div>
    </>
  )
}

export default Navbar
