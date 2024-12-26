import React from 'react'

const Banner_Cloud_integration = () => {
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
      <nav className="text-sm mb-3 text-gray-200  mt-[17%]  sm:mt-[12%] md:mt-[8%] lg:mt-[8%] xl:mt-[6%]  relative">
        <a href="/Services" className="hover:underline text-xl"><b>Our Services</b></a> / 
        <span className="ml-2 text-xl"><b>Cloud Integration</b></span>
      </nav>
      
      {/* Main Header Content */}
      <h1 className="text-2xl md:text-3xl font-semibold relative  ">Cloud Integration</h1>
      <p className="text-sm md:text-lg mt-2 relative">
      "Seamlessly connect systems and boost efficiency with Devtrain.co's cloud integration."
      </p>
    </div>
  </header> 
    </div>
  )
}

export default Banner_Cloud_integration