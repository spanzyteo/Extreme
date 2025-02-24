import React from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'], // Supports Latin characters
  weight: ['400', '600', '700'], // Choose the font weights you need
  variable: '--font-montserrat', // CSS variable (optional)
})

const FlightSection = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between mt-20 md:px-10 lg:px-20 px-5 gap-3">
      <div className="w-full md:w-auto">
        <Image
          src={'/flight.svg'}
          alt="flight"
          height={250}
          width={500}
          className="h-[220px] lg:w-[500px] w-full mt-8 lg:mt-0 object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 w-full md:w-auto">
        <h1
          className={`${montserrat.className} text-white text-3xl text- font-bold md:w-[500px] `}
        >
          BOOK YOUR FLIGHT TICKET
        </h1>
        <h1
          className={`${montserrat.className} text-white md:w-[400px] text-[17px]`}
        >
          Where every journey is a pleasure
        </h1>
        <h1
          className={`${montserrat.className} text-white md:w-[400px] text-[17px]`}
        >
          Book now and take off
        </h1>
        <div className="flex gap-3 mt-8">
          <button
            className={`${montserrat.className} h-[40px] w-[120px] rounded-[50px] border-2 border-[#FFD700] text-white font-semibold hover:bg-[#FFD700] hover:text-black transition-all duration-300 ease-in-out`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default FlightSection
