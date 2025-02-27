'use client'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { closeAbout } from '../store/modalSlice'

const AboutUs = () => {
  const modal = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()

  const handleCloseAbout = () => {
    dispatch(closeAbout())
  }

  useEffect(() => {
    if (modal.about) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [modal.about])

  return (
    <>
      <AnimatePresence>
        {modal.about && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white lg:w-[600px] w-[90%] p-6 rounded-lg shadow-lg"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="flex justify-between items-center">
                <div></div>
                <Image
                  src={'/cancel.svg'}
                  alt="cancel"
                  width={25}
                  height={25}
                  className="w-[25px] h-[25px] cursor-pointer"
                  onClick={() => handleCloseAbout()}
                />
              </div>
              <h1 className="text-3xl font-bold">About us</h1>
              <h1 className="text-[14px] mt-4 text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AboutUs
