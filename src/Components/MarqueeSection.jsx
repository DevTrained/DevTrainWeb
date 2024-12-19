import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
// import ("/index.css");
// Sample Reviews Data
const reviews = [
    {
      name: 'John Doe',
      username: '@johndoe',
      body: 'Devtrain.co transformed our business with their expertise in AI and cloud solutions. Highly recommended!',
      img: '/Assets/Images/Avatar.png',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      username: '@janesmith',
      body: 'Thanks to Devtrain.co, our digital presence has improved drastically. The team is incredibly knowledgeable and helpful.',
      img: '/Assets/Images/Avatar.png',
      rating: 4,
    },
    {
      name: 'Michael Brown',
      username: '@michaelbrown',
      body: 'Their mobile app development service was outstanding! Devtrain.co delivered exactly what we needed on time.',
      img: '/Assets/Images/Avatar.png',
      rating: 3,
    },
    {
      name: 'Alice Green',
      username: '@alicegreen',
      body: 'Working with Devtrain.co has been a game-changer for us. They understand our needs perfectly!',
      img: '/Assets/Images/Avatar.png',
      rating: 5,
    },
    {
      name: 'David Wilson',
      username: '@davidwilson',
      body: 'Impressed with the professionalism and responsiveness of Devtrain.co. They really know what they’re doing.',
      img: '/Assets/Images/Avatar.png',
      rating: 4,
    },
    {
        name: 'David Wilson',
        username: '@davidwilson',
        body: 'Impressed with the professionalism and responsiveness of Devtrain.co. They really know what they’re doing.',
        img: '/Assets/Images/Avatar.png',
        rating: 4,
      },
  ];
  

const ReviewCard = ({ name, username, body, img, rating }) => (
    <div className="flex flex-col md:flex-row items-center md:items-start p-4 w-full bg-gradient-to-r from-[#175255] bg-[#012236]  shadow-lg rounded-lg">

    {/* <div className="flex flex-col md:flex-row items-center md:items-start p-4 w-full bg-[#3aaf9a] shadow-lg rounded-lg"> */}
      {/* <img src={img} alt={name} className="w-16 h-16 rounded-full mb-4 md:mb-0 md:mr-4" /> */}
    <div className="text-center md:text-left flex-1 w-96 h-[30vh]">
      <h4 className="text-lg text-white font-semibold">{name}</h4>
          <p className="text-sm text-[#f7ab0a] mb-1 ">{username}</p>
          
      <div className="flex justify-center md:justify-start mb-2 text-white">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < rating ? '' : 'text-gray-300'} />
        ))}
      </div>
      <p className="text-sm text-white">{body}</p>

    </div>
  </div>
);

const MarqueeSection = () => {
  const [isHoverLeft, setIsHoverLeft] = useState(false);
  const [isHoverRight, setIsHoverRight] = useState(false);

  return (
    <section 
  className="py-12 bg-cover bg-center font-poppins" 
  style={{ backgroundImage: "url('/Assets/Images/Dot_Maps_customer_Reviews.png')" }}
>

      <div className="container mx-auto text-center">

      <h2 className="text-2xl md:text-4xl font-bold text-[#012236] mb-12">
    Our Customers <span className="heart-container"><FaRegHeart className="heart-icon animate-jump-flip text-6xl text-red-700" /></span> Love Us
  </h2>

        {/* <h2 className="text-2xl md:text-4xl font-bold text-[#3aaf99] mb-8">Our Customers <FaRegHeart /> Love Us</h2> */}
        <div className="relative flex flex-col items-center space-y-8">
          <div
            className="overflow-hidden w-full"
            onMouseEnter={() => setIsHoverLeft(true)}
            onMouseLeave={() => setIsHoverLeft(false)}
          >
            <div className={`flex space-x-4 md:space-x-8 animate-marquee-left ${isHoverLeft ? 'paused' : ''}`}>
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
          </div>
          <div
            className="overflow-hidden w-full"
            onMouseEnter={() => setIsHoverRight(true)}
            onMouseLeave={() => setIsHoverRight(false)}
          >
            <div className={`flex space-x-4 md:space-x-8 animate-marquee-right ${isHoverRight ? 'paused' : ''}`}>
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
