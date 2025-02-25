'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { reviews } from '../utils/reviews'
import { motion } from 'framer-motion'

const MessageSection = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const itemsToShow = isLargeScreen ? 3 : 1
  const maxIndex = reviews.length - itemsToShow

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, 3000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <div className="mt-16 flex flex-col md:px-10 lg:px-20 px-5">
      <div className="text-white text-3xl font-bold md:w-[600px]">
        SEND MESSAGES, MAKE TRADES - ALL IN ONE GO
      </div>
      <h1 className="mt-2 text-white text-[17px]">
        Trade on the go right from the chat
      </h1>

      {/* Carousel Container */}
      <div className="overflow-hidden lg:w-[740px] w-[230px] gap-8 flex justify-center mt-8 mx-auto">
        <motion.div
          className="flex lg:gap-6 gap-4"
          animate={{ x: -startIndex * 240 }} // Moves images left automatically
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {reviews.map((review) => (
            <Image
              key={review.id}
              src={review.image}
              alt={`Review ${review.id}`}
              width={700}
              height={200}
              className="rounded-lg w-[400px] h-[500px] object-fill"
            />
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-4 gap-2">
        {[...Array(4)].map((_, index) => {
          const calculatedIndex = Math.min(
            index * Math.floor(reviews.length / 4),
            maxIndex
          )
          const isActive = startIndex === calculatedIndex

          return (
            <button
              key={index}
              onClick={() => setStartIndex(calculatedIndex)}
              className={`w-2 h-2 rounded-full ${
                isActive ? 'bg-[#D9D9D9]' : 'bg-[#FFD700]'
              }`}
              title={`Go to slide ${index + 1}`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default MessageSection
