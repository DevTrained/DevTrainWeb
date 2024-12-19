import React from 'react';

const Team = () => {
  const ceo = {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: '/Assets/Images/1.png', // Replace with the actual image path
    description:
      'John Doe is the visionary founder of DevTrain. With over a decade of experience in the tech industry, John is committed to empowering the next generation of tech talent and driving innovation.',
    links: {
      linkedin: '#',
      instagram: '#',
      facebook: '#',
    },
  };

  const teamMembers = [
    {
      name: 'Muneeb',
      role: 'CTO & Co-Founder',
      image: '/Assets/Images/Muneeb-Devtrain.png',
      links: {
        linkedin: '#',
        instagram: '#',
        facebook: '#',
      },
    },
    {
      name: 'Zeeshan',
      role: 'Director',
      image: '/Assets/Images/Zeeshan-Akram-Dev.png',
      links: {
        linkedin: '#',
        instagram: '#',
        facebook: '#',
      },
    },
    {
      name: 'Asif',
      role: 'Director',
      image: '/Assets/Images/Asif-Devtrain.png',
      links: {
        linkedin: '#',
        instagram: '#',
        facebook: '#',
      },
    },
    {
      name: 'Usman',
      role: 'UI/UX Designer',
      image: '/Assets/Images/Usman-Devtrain.png',
      links: {
        linkedin: '#',
        instagram: '#',
        facebook: '#',
      },
    },
    {
      name: 'Elisha Lazar',
      role: 'Dev Trainer',
      image: '/Assets/Images/Elisha-Devtrain.png',
      links: {
        linkedin: '#',
        instagram: '#',
        facebook: '#',
      },
    },
    {
      name: 'Umar',
      role: 'Digital Marketer',
      image: '/Assets/Images/Umar-Devtrain.png',
      links: {
        linkedin: '#',
        instagram: '#',
        facebook: '#',
      },
    },
    {
      name: 'Aswab',
      role: 'Web Developer',
      image: '/Assets/Images/Aswab-Devtrain.png',
      links: {
        linkedin: '#',
        instagram: '#',
        facebook: '#',
      },
    },
    {
      name: 'Zain',
      role: 'Web Developer',
      image: '/Assets/Images/Zain-Devtrain.png',
      links: {
        linkedin: '#',
        instagram: '#',
        facebook: '#',
      },
    },
    {
      name: 'Shaban',
      role: 'Wordpress Developer',
      image: '/Assets/Images/Shaban-Devtrain.png',
      links: {
        linkedin: '#',
        instagram: '#',
        facebook: '#',
      },
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center text-[#006666] mb-12">
        Our Leadership
      </h2>

      {/* CEO Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:space-x-8 mb-12 px-4 lg:px-16">
        {/* Left: CEO Image */}
        <div className="flex-1 relative bg-white shadow-lg overflow-hidden rounded-lg group">
          <img
            src={ceo.image}
            alt={ceo.name}
            className="w-full h-full object-cover rounded-full mx-auto transition-transform duration-500 group-hover:scale-110"
          />

          {/* Hover Overlay for CEO */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#006666] to-transparent opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <div className="absolute bottom-0 w-full p-4 text-white text-center">
              <h3 className="text-lg font-bold">{ceo.name}</h3>
              <p className="text-sm">{ceo.role}</p>
              {/* Social Links */}
              <div className="flex justify-center space-x-2 mt-2">
                <a href={ceo.links.linkedin} className="text-white hover:text-gray-300">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={ceo.links.instagram} className="text-white hover:text-gray-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href={ceo.links.facebook} className="text-white hover:text-gray-300">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: CEO Description */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-950">{ceo.name}</h3>
          <p className="text-sm text-gray-700 font-medium mt-2 mb-4">{ceo.role}</p>
          <p className="text-gray-600">{ceo.description}</p>
        </div>
      </div>

      {/* Team Section Heading */}
      <h2 className="text-4xl font-bold text-center text-blue-950 mb-8">
        Meet Our Team
      </h2>

      {/* Team Cards */}
      <div className="flex flex-wrap gap-12 px-4  lg:px-16">
        {teamMembers.map((member, index) => (
          <div key={index} className={`relative w-[30%] h-[30%] bg-${member.role === 'Director' ? '[#089084]' : '[#089084]'} bg-${member.role === 'Director' ? '[#089084f]' : '[#089084]'} shadow-lg overflow-hidden rounded-full group`}
          >
            {/* Front Side: Member Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover  rounded-full"
            />

            {/* Hover Overlay: Back Side with Data */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#006666] to-transparent opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <div className="absolute bottom-0 w-full p-4 text-white text-center">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
                {/* Social Links */}
                <div className="flex justify-center space-x-2 mt-2">
                  <a href={member.links.linkedin} className="text-white hover:text-gray-300">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href={member.links.instagram} className="text-white hover:text-gray-300">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href={member.links.facebook} className="text-white hover:text-gray-300">
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
