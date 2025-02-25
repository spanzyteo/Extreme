'use client'
import Image from 'next/image'

const Navbar = () => {
  
  return (
    <>
      <div className="h-[70px] flex fixed top-0 right-0 left-0 items-center justify-between px-10 lg:px-20 shadow-md z-10 bg-[#2E4053]">
        <div
          className={`text-white font-semibold text-xl`}
        >
          Extreme
        </div>
        <div
          className={`lg:flex hidden gap-6 font-semibold text-white`}
        >
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Pricing</h1>
          <h1>Contact</h1>
        </div>
        <div className="lg:flex hidden gap-4">
          <button
            className={`bg-[#FFD700] text-black rounded-[50px] font-semibold text-[13px] w-[74px] h-[30px] hover:bg-black hover:text-[#FFD700] transition-all duration-300 ease-in-out`}
          >
            Sign up
          </button>
          <button
            className={`bg-[#FFD700] text-black rounded-[50px] font-semibold text-[13px] w-[74px] h-[30px] hover:bg-black hover:text-[#FFD700] transition-all duration-300 ease-in-out`}
          >
            Sign in
          </button>
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
