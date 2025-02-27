'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useAppDispatch } from '../store/hooks'
import { openAbout } from '../store/modalSlice'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const handleOpenAbout = () => {
    dispatch(openAbout())
  }
  return (
    <>
      <div className="h-[70px] flex fixed top-0 right-0 left-0 items-center justify-between px-10 lg:px-20 shadow-md z-10 bg-[#2E4053]">
        <div className={`text-white font-semibold text-xl`}>Extreme</div>
        <div className={`lg:flex hidden gap-6 font-semibold text-white`}>
          <Link href={'/'}>Home</Link>
          <h1 onClick={() => handleOpenAbout()} className='cursor-pointer'>About</h1>
          <h1>Pricing</h1>
          <h1>Contact</h1>
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
          <Image
            src={'/menu-icon.svg'}
            alt="menu-icon"
            width={50}
            height={50}
            className="w-[30px] h-[50px]"
          />
        </div>
      </div>
    </>
  )
}

export default Navbar
