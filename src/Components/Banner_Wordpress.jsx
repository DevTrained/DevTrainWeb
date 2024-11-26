import React from 'react'

const Banner_Wordpress = () => {
  return (
    <div>
              <header
    className="relative bg-cover bg-center py-10 md:py-14 text-center text-white font-poppins"
    style={{ backgroundImage: 'url("/Assets/Images/PagesBanner.jpg")' }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-60"></div>
    
    <div className="relative container mx-auto px-4">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm mb-3 text-gray-200 mt-[10%] sm:mt-[6%] relative">
        <a href="/Services" className="hover:underline text-xl"><b>Our Services</b></a> / 
        <span className="ml-2 text-xl"><b>WordPress</b></span>
      </nav>
      
      {/* Main Header Content */}
      <h1 className="text-2xl md:text-3xl font-semibold relative">WordPress  Websites</h1>
      <p className="text-sm md:text-lg mt-2 relative">
      "Fast, Secure, and Stylish – WordPress Static Websites Done Right!"
      </p>
    </div>
  </header>
    </div>
  )
}

export default Banner_Wordpress