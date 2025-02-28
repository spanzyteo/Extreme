import React from 'react'

const ContactSection = () => {
  return (
    <div id="contact" className='mt-6'>
      <div className="flex flex-col mt-16 md:px-10 lg:px-20 px-5">
        <h1 className="text-white text-4xl font-bold mx-auto uppercase">
          Contact
        </h1>
        <div className="flex lg:flex-row flex-col-reverse justify-between mt-8 gap-10 lg:gap-0">
          <div className="flex flex-col">
            <h1 className="text-2xl text-white font-bold">Contact Us</h1>
            <h1 className="text-white mt-4 flex gap-2 items-center">
              Address:{' '}
              <span className="text-[15px] text-gray-400 mt-[0.1rem]">
                Alakahia junction N0 8 street
              </span>
            </h1>
            <div className="mt-4 h-1 w-full xl:w-[500px] lg:w-[400px] border-t border-gray-400"></div>
            <h1 className="text-white mt-4 flex gap-2 items-center">
              Phone:{' '}
              <span className="text-[15px] text-gray-400 mt-[0.1rem]">
                0123456789
              </span>
            </h1>
            <div className="mt-4 h-1 w-full xl:w-[500px] lg:w-[400px] border-t border-gray-400"></div>
            <h1 className="text-white mt-4 flex gap-2 items-center">
              Email:{' '}
              <span className="text-[15px] text-gray-400 mt-[0.1rem]">
                gospel@gmail.com
              </span>
            </h1>
            <div className="mt-4 h-1 w-full xl:w-[500px] lg:w-[400px] border-t border-gray-400"></div>
            <h1 className="text-white mt-4 flex gap-2 items-center">
              FAX:{' '}
              <span className="text-[15px] text-gray-400 mt-[0.1rem]">
                012345678
              </span>
            </h1>
            <div className="mt-4 h-1 w-full xl:w-[500px] lg:w-[400px] border-t border-gray-400"></div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl text-white font-bold">Send Message</h1>
            <form className="flex flex-col">
              <label className="text-white mt-4">Full Name</label>
              <input
                type="text"
                title="fullname"
                placeholder="Full Name"
                className="lg:w-[400px] w-full h-[40px] bg-inherit border border-white mt-2 rounded-[6px] pl-4 focus:outline-none focus:border-[#FFD700] text-white"
              />
              <label className="text-white mt-4">Email</label>
              <input
                type="email"
                title="email"
                placeholder="Email"
                className="lg:w-[400px] w-full h-[40px] bg-inherit border border-white mt-2 rounded-[6px] pl-4 focus:outline-none focus:border-[#FFD700] text-white"
              />
              <label className="text-white mt-4">Message</label>
              <textarea
                title="text"
                placeholder="Message us..."
                className=" placeholder-gray-400 bg-inherit border border-white px-4 py-2 w-full lg:w-[400px] focus:border-[#fab702] focus:outline-none align-top text-white rounded-[6px] mt-2"
                rows={3}
              ></textarea>
              <button
                className={`bg-[#FFD700] text-black rounded-[5px] font-semibold text-[13px] w-[100px] h-[30px] hover:bg-black hover:text-[#FFD700] transition-all duration-300 ease-in-out mt-8`}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
