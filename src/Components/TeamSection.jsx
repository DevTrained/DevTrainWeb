import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Muneeb",
      role: "UI Designer",
      image: "/Assets/Images/about.png",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#", 
      },
    },
    {
      name: "Zeeshan",
      role: "UI Designer",
      image: "https://via.placeholder.com/150",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Asif",
      role: "UI Designer",
      image: "https://via.placeholder.com/150",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Zain",
      role: "UI Designer",
      image: "https://via.placeholder.com/150",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-6">
      {/* CEO Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          CEO of the <span className="text-teal-600">Company</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left: Image with Hover Effect */}
          <div className="relative group">
            <img
              src="/Assets/Images/ceo.jpg" // Replace with actual image
              alt="CEO"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-teal-600 bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition duration-300 flex space-x-3">
                <a
                  href="#"
                  className="text-white text-2xl hover:scale-110 transform transition"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-2xl hover:scale-110 transform transition"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-2xl hover:scale-110 transform transition"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Right: Text */}
          <div className="text-gray-800 space-y-4">
            <h3 className="text-3xl font-semibold">John Doe</h3>
            <p className="text-lg text-gray-600">
              John Doe, the visionary CEO of our company, has been leading the
              organization to new heights with his innovative ideas and
              exceptional leadership skills. Under his guidance, we’ve achieved
              remarkable milestones and continue to strive for excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Meet Our <span className="text-teal-600">Team</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Get to know the amazing people behind our success.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
          >
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-60 object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-teal-600 bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition duration-300 flex space-x-3">
                <a
                  href={member.social.facebook}
                  className="text-white text-xl hover:scale-110 transform transition"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href={member.social.twitter}
                  className="text-white text-xl hover:scale-110 transform transition"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href={member.social.linkedin}
                  className="text-white text-xl hover:scale-110 transform transition"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            {/* Text */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div> 
    </div>
  );
};

export default TeamSection;
