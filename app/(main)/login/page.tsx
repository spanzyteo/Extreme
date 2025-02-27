import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col mt-32 h-[62vh] md:px-40 lg:px-20 px-5 sm:px-20">
      <h1 className="text-3xl font-bold text-white mx-auto">Welcome</h1>
      <h1 className="text-semibold text-[17px] text-white mt-4 mx-auto">
        Please Login
      </h1>
      <form className="flex flex-col lg:mx-auto">
        <input
          type="email"
          placeholder="Email"
          className="md:h-[50px] h-[40px] lg:w-[500px] w-full bg-inherit mt-4 rounded-[16px] border focus:outline-none focus:border-[#FFD700] px-4 text-white placeholder:text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="md:h-[50px] h-[40px] lg:w-[500px] w-full bg-inherit mt-8 rounded-[16px] border focus:outline-none focus:border-[#FFD700] px-4 text-white placeholder:text-white"
        />
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2 w-4 h-4 accent-[#FFD700]"
            />
            <label
              htmlFor="rememberMe"
              className="text-white md:text-[14px] text-[12px]"
            >
              Remember me
            </label>
          </div>
          <h1 className="text-white md:text-[14px] text-[12px]">
            Forgot Password?
          </h1>
        </div>
        <button className="h-[40px] w-full rounded-[50px] font-semibold bg-[#FFD700] text-black transition-all duration-300 ease-in-out mt-16">
          Login
        </button>
      </form>
    </div>
  )
}

export default page
