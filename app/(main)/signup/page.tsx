import React from 'react'

const SignUp = () => {
  return (
    <div className="flex flex-col mt-32 md:px-40 lg:px-20 px-5 sm:px-20">
      <h1 className="text-3xl font-bold text-white mx-auto">Welcome</h1>
      <h1 className="text-semibold text-[17px] text-white mt-4 mx-auto">
        Create an account
      </h1>
      <form className="flex flex-col lg:mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="md:h-[50px] h-[40px] lg:w-[500px] w-full bg-inherit mt-4 rounded-[16px] border focus:outline-none focus:border-[#FFD700] px-4 text-white placeholder:text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="md:h-[50px] h-[40px] lg:w-[500px] w-full bg-inherit mt-8 rounded-[16px] border focus:outline-none focus:border-[#FFD700] px-4 text-white placeholder:text-white"
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="md:h-[50px] h-[40px] lg:w-[500px] w-full bg-inherit mt-8 rounded-[16px] border focus:outline-none focus:border-[#FFD700] px-4 text-white placeholder:text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="md:h-[50px] h-[40px] lg:w-[500px] w-full bg-inherit mt-8 rounded-[16px] border focus:outline-none focus:border-[#FFD700] px-4 text-white placeholder:text-white"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="md:h-[50px] h-[40px] lg:w-[500px] w-full bg-inherit mt-8 rounded-[16px] border focus:outline-none focus:border-[#FFD700] px-4 text-white placeholder:text-white"
        />
        <button className="h-[40px] w-full rounded-[50px] font-semibold bg-[#FFD700] hover:bg-[#2E4053] hover:border-2 hover:border-[#FFD700] hover:text-white text-black transition-all duration-300 ease-in-out mt-16">
          Sign Up
        </button>
        <h1 className="text-white mt-8 text-[14px]">Already have an account</h1>
        <button className="h-[40px] w-full rounded-[50px] font-semibold border-2 border-[#FFD700] text-white hover:text-black hover:bg-[#FFD700] transition-all duration-300 ease-in-out mt-2">
          Login
        </button>
      </form>
    </div>
  )
}

export default SignUp