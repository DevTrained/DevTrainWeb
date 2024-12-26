import React from 'react'

const Banner_Digital_Marketing = () => {
  return (
    <div>
              <header
    className="relative bg-cover bg-center py-10 md:py-14 text-center text-white font-poppins"
    style={{ backgroundImage: 'url("https://esfequitylp.com/wp-content/uploads/2024/02/Gov-IT-Header-11.webp")' }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-60"></div>
    
    <div className="relative container mx-auto px-4">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm mb-3 text-gray-200 mt-[17%]  sm:mt-[12%] md:mt-[8%] lg:mt-[8%] xl:mt-[6%]  relative">
        <a href="/Services" className="hover:underline text-xl"><b>Our Services</b></a> / 
        <span className="ml-2 text-xl"><b>Digital Marketing</b></span>
      </nav>
      
      {/* Main Header Content */}
      <h1 className="text-2xl md:text-3xl font-semibold relative">Digital Marketing</h1>
      <p className="text-sm md:text-lg mt-2 relative">
      "Maximize your brand's reach and impact with powerful digital marketing solutions."
      </p>
    </div>
  </header>
    </div>
  )
}

export default Banner_Digital_Marketing