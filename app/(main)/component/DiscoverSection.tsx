import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'


const montserrat = Montserrat({
  subsets: ['latin'], // Supports Latin characters
  weight: ['400', '600', '700'], // Choose the font weights you need
  variable: '--font-montserrat', // CSS variable (optional)
})

const DiscoverSection = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between mt-16 md:px-10 lg:px-20 px-5">
      <div className="flex flex-col gap-2">
        <h1 className={`${montserrat.className} text-white text-4xl font-bold`}>
          Discover
        </h1>
        <h1
          className={`${montserrat.className} text-white md:w-[400px] text-[17px]`}
        >
          The most secure market place for buying and selling unique crypto
          assets
        </h1>
        <div className="flex gap-3 mt-8">
          <button
            className={`${montserrat.className} h-[40px] w-[100px] rounded-[50px] border-2 border-[#FFD700] text-white font-semibold hover:bg-[#FFD700] hover:text-black transition-all duration-300 ease-in-out`}
          >
            Buy
          </button>
          <button
            className={`${montserrat.className} h-[40px] w-[100px] rounded-[50px] border-2 border-[#FFD700] text-white font-semibold hover:bg-[#FFD700] hover:text-black transition-all duration-300 ease-in-out`}
          >
            Sell
          </button>
        </div>
      </div>
      <div className="w-full md:w-auto mt-8 md:mt-0">
        <Image
          src={'/discover.svg'}
          alt="discover"
          height={250}
          width={500}
          className="h-[220px] lg:w-[500px] w-full object-cover"
        />
      </div>
    </div>
  )
}

export default DiscoverSection