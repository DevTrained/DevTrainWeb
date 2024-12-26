import React from 'react'

const CareersBanner = () => {
  return (
    <>
           <header
  className="relative bg-cover bg-center h-64 md:h-96 text-white font-poppins"
  style={{ backgroundImage: 'url("/Assets/Images/PagesBanner.jpg")' }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-60"></div>

  {/* Main Header Content */}
  <div className="relative  flex items-center justify-center h-full">
    <h1 className="text-3xl  pt-12 md:text-5xl font-semibold">Careers</h1>
  </div>
</header>
    </>
  )
}

export default CareersBanner