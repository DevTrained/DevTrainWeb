import React from 'react';

const Team = () => {
  const ceo = {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: '/Assets/Images/Sana-Devtrain.jpg', // Replace with the actual image path
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
      role: 'Web Developer',
      image: '/Assets/Images/CTO-Devtrain.jpg',
      links: {
        linkedin: '#',
        instagram: '#',
        facebook: '#',
      },
    },
    {
      name: 'Zeeshan',
      role: 'UI/UX Designer',
      image: '/Assets/Images/Zeeshan-Akram.jpg',
      links: {
        linkedin: '#',
        instagram: '#',
        facebook: '#',
      },
    },
    {
      name: 'Zara',
      role: 'Marketing Specialist',
      image: '/Assets/Images/zara.png',
      links: {
        linkedin: '#',
        instagram: '#',
        facebook: '#',
      },
    },
    {
      name: 'Elisha Lazar',
      role: 'Web Developer',
      image: '/Assets/Images/Elisha-MERN-Stack-Expert.png',
      links: {
        linkedin: '#',
        instagram: '#',
        facebook: '#',
      },
    },
    // {
    //   name: 'Elisha Lazar',
    //   role: 'Web Developer',
    //   image: '/Assets/Images/Abdul-Rehman-Trainer.jpg',
    //   links: {
    //     linkedin: '#',
    //     instagram: '#',
    //     facebook: '#',
    //   },
    // },
    // {
    //   name: 'Elisha Lazar',
    //   role: 'Web Developer',
    //   image: '/Assets/Images/Mashad-Zaib-Devtrain.jpg',
    //   links: {
    //     linkedin: '#',
    //     instagram: '#',
    //     facebook: '#',
    //   },
    // },
  ];

  return (
    <div className="bg-gray-200 py-12">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-[#089084] mb-12">
        Our Leadership
      </h2>

      {/* CEO Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:space-x-8 mb-12 px-4 lg:px-16">
        {/* Left: CEO Image */}
        <div className="flex-1 relative bg-white shadow-lg overflow-hidden rounded-lg group">
          <img
            src={ceo.image}
            alt={ceo.name}
            className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#089084] to-transparent opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <div className="absolute bottom-0 w-full p-4 text-white">
              <h3 className="text-lg font-bold">{ceo.name}</h3>
              <p className="text-sm">{ceo.role}</p>
              <div className="flex space-x-4 mt-2">
                <a
                  href={ceo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f7ab0a] transition-colors"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href={ceo.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f7ab0a] transition-colors"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href={ceo.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f7ab0a] transition-colors"
                >
                  <i className="fab fa-facebook text-xl"></i>
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
      <h2 className="text-3xl font-bold text-center text-blue-950 mb-8">
        Meet Our Team
      </h2>

      {/* Team Cards */}
      <div className="flex justify-center  flex-wrap  gap-28 px-4 lg:px-16">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-72 h-96 bg-white shadow-lg overflow-hidden rounded-lg group"
          >
            {/* Member Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#089084] to-transparent opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <div className="absolute bottom-0 w-full p-4 text-white">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
                <div className="flex space-x-4 mt-2">
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#f7ab0a] transition-colors"
                  >
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a
                    href={member.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#f7ab0a] transition-colors"
                  >
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a
                    href={member.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#f7ab0a] transition-colors"
                  >
                    <i className="fab fa-facebook text-xl"></i>
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
