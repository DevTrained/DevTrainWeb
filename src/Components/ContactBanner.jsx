import React from 'react'

const ContactBanner = () => {
  return (
    <>
          <header
  className="relative bg-cover bg-center h-64 md:h-96 text-white font-poppins"
  style={{ backgroundImage: 'url("/Assets/Images/PagesBanner.jpg")' }}
>
  {/* Overlay */}
  {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}
  <div className="absolute inset-0 bg-[#012236] opacity-70"></div>
  {/* Main Header Content */}
  <div className="relative  flex items-center justify-center h-full">
    <h1 className="text-3xl  pt-12 md:text-5xl font-semibold">Contact Us</h1>
  </div>
</header>

    </>
  )
}

export default ContactBanner