import React from 'react'

const ContactBanner = () => {
  return (
    <>
          <header
      className="relative bg-cover bg-center py-10 md:py-14 text-center text-white font-poppins"
      style={{ backgroundImage: 'url("/Public/Assets/Images/PagesBanner.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="relative container top-4 sm:top-0 mx-auto px-4">
       
        
        {/* Main Header Content */}
        <h1 className="text-2xl md:text-3xl font-semibold relative mt-24">Contact Us</h1>
      </div>
    </header>
    </>
  )
}

export default ContactBanner