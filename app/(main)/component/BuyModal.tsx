'use client'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { closeBuyModal } from '../store/modalSlice'

const BuyModal = () => {
  const modal = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()

  const handleCloseBuyModal = () => {
    dispatch(closeBuyModal())
  }

  useEffect(() => {
    if (modal.buyModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [modal.buyModal])

  return (
    <AnimatePresence>
      {modal.buyModal && (
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
                onClick={handleCloseBuyModal}
              />
            </div>
            <div className="flex flex-col lg:px-8 mt-4">
              <label className="text-[#2E4053] font-semibold text-[14px]">
                Currency
              </label>
              <select
                className="w-full focus:outline-none border border-[#FFD700] px-4 py-2 font-medium mt-2"
                defaultValue="USDT"
                title="Select Currency"
              >
                <option value="usdt" className="text-black font-medium">
                  USDT
                </option>
                <option value="btc" className="text-black font-medium">
                  BTC
                </option>
                <option value="eth" className="text-black font-medium">
                  ETH
                </option>
              </select>
              <label className="text-[#2E4053] font-semibold text-[14px] mt-4">
                Address
              </label>
              <input
                type="text"
                placeholder="address"
                defaultValue={'tusiviwif34cii6994cjdjg'}
                className="w-full focus:outline-none border border-[#FFD700] px-4 py-2 mt-2 placeholder:text-black font-medium"
              />
              <label className="text-[#2E4053] font-semibold text-[14px] mt-4">
                Network
              </label>
              <select
                className="w-full focus:outline-none border border-[#FFD700] px-4 py-2 font-medium mt-2"
                defaultValue="TON"
                title="Select Network"
              >
                <option value="ton" className="text-black font-medium">
                  TON
                </option>
                <option value="tron" className="text-black font-medium">
                  TRON
                </option>
                <option value="sol" className="text-black font-medium">
                  SOL
                </option>
              </select>
              <label className="text-[#2E4053] font-semibold text-[14px] mt-4">
                Amount
              </label>
              <input
                type="number"
                placeholder="amount"
                className="w-full focus:outline-none border border-[#FFD700] px-4 py-2 mt-2 placeholder:text-black font-medium"
              />
              <button className="bg-[#FFD700] text-black rounded-[16px] font-semibold text-[13px] w-[120px] h-[35px] hover:bg-black hover:text-[#FFD700] transition-all duration-300 ease-in-out mt-8 mx-auto">
                Send Proof
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BuyModal
