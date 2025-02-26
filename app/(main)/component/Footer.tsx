import { FaWhatsapp } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'
import { LuPhone } from "react-icons/lu";


const Footer = () => {
  return (
    <div className="mt-16 flex items-center justify-between md:px-10 lg:px-20 px-5 py-3 shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
      <h1 className="text-gray-300 text-[14px]">copyright©extreme</h1>
      <div className="flex items-center gap-3">
        <FaWhatsapp className="text-gray-300 w-[25px] h-[25px]" />
        <MdOutlineEmail className="text-gray-300 w-[25px] h-[25px]" />
        <LuPhone className="text-gray-300 w-[25px] h-[25px]" />
      </div>
    </div>
  )
}

export default Footer
