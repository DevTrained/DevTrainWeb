import React, { useState } from "react";
import { motion } from 'framer-motion';
import { FaServer } from 'react-icons/fa';

import {
  FaJava,
  FaAndroid,
  FaApple,
  FaDatabase,
  FaPhp,
  FaAws,
  FaGoogle,
  FaBootstrap,
  FaLaravel,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiKotlin,
  SiSwift,
  SiFirebase,
  SiFlutter,
  SiSqlite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiRubyonrails,
  SiExpress,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiAnsible,
  SiPuppet,
  SiChef,
  SiDocker,
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
  SiNewrelic,
  SiTerraform,
} from "react-icons/si";
// import { Icon } from '@iconify/react'; // Import from iconify-react for non-native React icons

const servicesData = {
  Mobile: [
    { name: "Java", icon: <FaJava className="text-orange-600 text-4xl" /> },
    { name: "Kotlin", icon: <SiKotlin className="text-purple-600 text-4xl" /> },
    { name: "Swift", icon: <SiSwift className="text-red-600 text-4xl" /> },
    { name: "Objective-C", icon: <FaDatabase className="text-blue-600 text-4xl" /> },
    { name: "Android", icon: <FaAndroid className="text-green-600 text-4xl" /> },
    { name: "iOS", icon: <FaApple className="text-gray-800 text-4xl" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-500 text-4xl" /> },
    { name: "SQLite", icon: <SiSqlite className="text-blue-700 text-4xl" /> },
    { name: "Core Data", icon: <img src="/Assets/Images/Core-Data.png" alt="Core Data" className="h-12 w-12" /> },
    { name: "Room", icon: <img src="/Assets/Images/Room-Devtrain.png" alt="Room" className="h-12 w-12" /> },
    { name: "Realm", icon: <img src="/Assets/Images/Realm-Devtrain.png" alt="Realm" className="h-12 w-12" /> },
    { name: "Firebase", icon: <SiFirebase className="text-orange-500 text-4xl" /> },
    { name: "Alamofire", icon: <img src="/Assets/Images/Alamofire-Devtrain.png" alt="Alamofire" className="h-12 w-12" /> },
    { name: "Retroit", icon: <img src="/Assets/Images/Room-Devtrain.png" alt="Retrofit" className="h-12 w-12" /> },
    { name: "Twilio", icon: <img src="/Assets/Images/Twilio-Devtrain.png" alt="Twilio" className="h-12 w-12" /> },
    { name: "Pusher", icon: <img src="/Assets/Images/Pusher-Devtrain.png" alt="Pusher" className="h-12 w-12" /> },


  ],
  Web: [
    { name: "HTML", icon: <SiHtml5 className="text-orange-600 text-4xl" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600 text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-4xl" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-600 text-4xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 text-4xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
    { name: "Redis", icon: <SiRedis className="text-red-600 text-4xl" /> },
    { name: "ReactJS", icon: <SiReact className="text-cyan-600 text-4xl" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-600 text-4xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-orange-500 text-4xl" /> },
    { name: "Amazon Web Services", icon: <FaAws className="text-yellow-600 text-4xl" /> },
    { name: "Google Cloud", icon: <FaGoogle className="text-blue-500 text-4xl" /> },
    { name: "Ruby on Rails", icon: <SiRubyonrails className="text-red-600 text-4xl" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-600 text-4xl" /> },
    { name: "ExpressJS", icon: <SiExpress className="text-gray-700 text-4xl" /> },
  ],
  "UI/UX": [
    { name: "Adobe XD", icon: <img src="/Assets/Images/Adobe-xd.png" alt="Pusher" className="h-12 w-12" /> },
    { name: "Figma", icon: <img src="/Assets/Images/Figma.png" alt="Pusher" className="h-12 w-12" /> },
    { name: "Invision", icon: <img src="/Assets/Images/Invision.png" alt="Pusher" className="h-12 w-12" /> },
    { name: "Sketch", icon: <img src="/Assets/Images/Sketch.png" alt="Pusher" className="h-12 w-12" /> },
    { name: "Miro", icon: <img src="/Assets/Images/Miro.png" alt="Pusher" className="h-12 w-12" /> },


  ],
  "E-Commerce": [
    { name: "Shopify", icon: <img src="/Assets/Images/Shopify.png" alt="Shopify" className="h-12 w-12" /> },
    { name: "Wordpress", icon: <img src="/Assets/Images/Wordpress.png" alt="Wordpress" className="h-12 w-12" /> },
    { name: "React", icon: <img src="/Assets/Images/Wordpress.png" alt="React" className="h-12 w-12" /> },
    
    { name: "HTML", icon: <SiHtml5 className="text-orange-600 text-4xl" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600 text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-4xl" /> },
    { name: "React", icon: <SiReact className="text-cyan-600 text-4xl" /> },
    { name: "Liquid", icon: <FaDatabase className="text-purple-600 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
    { name: "NodeJs", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: "Shopify Polaris", icon: <img src="/Assets/Images/Shopify.png" alt="React" className="h-12 w-12" /> },
    { name: "Shopify OS 2.0", icon: <img src="/Assets/Images/Shopify.png" alt="React" className="h-12 w-12" /> },
    
  ],
  DevOps: [
    { name: "Jenkins", icon: <SiGit className="text-orange-600 text-4xl" /> },
    { name: "Travis CI", icon: <SiGithub className="text-gray-700 text-4xl" /> },
    { name: "Circle CI", icon: <SiBitbucket className="text-blue-600 text-4xl" /> },
    { name: "GitLab CI/CD", icon: <img src="/Assets/Images/service1.png" alt="React" className="h-12 w-12" /> },
    { name: "TeamCity", icon: <img src="/Assets/Images/service2.png" alt="React" className="h-12 w-12" /> },
    { name: "Git", icon: <img src="/Assets/Images/service3.png" alt="React" className="h-12 w-12" /> },
    { name: "GitHub", icon: <img src="/Assets/Images/service4.png" alt="React" className="h-12 w-12" /> },
    { name: "BitBucket", icon: <img src="/Assets/Images/service5.png" alt="React" className="h-12 w-12" /> },
    { name: "Shopify OS 2.0", icon: <img src="/Assets/Images/service6.png" alt="React" className="h-12 w-12" /> },
    
    { name: "Ansible", icon: <SiAnsible className="text-red-600 text-4xl" /> },
    { name: "Puppet", icon: <SiPuppet className="text-purple-600 text-4xl" /> },
    { name: "Chef", icon: <SiChef className="text-green-600 text-4xl" /> },
    { name: "SaltStack", icon: <img src="/Assets/Images/services3.png" alt="React" className="h-12 w-12" /> },
    { name: "Docker", icon: <img src="/Assets/Images/services4.png" alt="React" className="h-12 w-12" /> },
    { name: "ELK Stacks", icon: <img src="/Assets/Images/services9.png" alt="React" className="h-12 w-12" /> },
    { name: "Cloud Formation", icon: <img src="/Assets/Images/services7.png" alt="React" className="h-12 w-12" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600 text-4xl" /> },
    { name: "Prometheus", icon: <SiPrometheus className="text-red-600 text-4xl" /> },
    { name: "Grafana", icon: <SiGrafana className="text-blue-500 text-4xl" /> },
    { name: "New Relic", icon: <SiNewrelic className="text-blue-600 text-4xl" /> },
    { name: "Terraform", icon: <SiTerraform className="text-orange-600 text-4xl" /> },
    
    { name: "Amazon Web Services", icon: <img src="/Assets/Images/Shopify.png" alt="React" className="h-12 w-12" /> },
    { name: "Google Cloud Platform", icon: <img src="/Assets/Images/Shopify.png" alt="React" className="h-12 w-12" /> },



  ],
};

const ServiceCards = () => {
  const [selectedCategory, setSelectedCategory] = useState("Mobile");

  return (
    <>
  <div className="bg-[#012236] h-28  font-poppins">
    <div className="flex  item-center justify-center pt-8 gap-2">
      <motion.div
        className="mx-3  text-[#f7ab0a]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1, rotate: 360 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <FaServer className="text-4xl sm:text-5xl md:text-6xl" />
      </motion.div>
      <motion.h2
        className="text-white font-poppins  text-2xl 
        sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Stack and Technologies
      </motion.h2>
    </div>
  </div>
  <div className="mx-auto px-4 py-8 bg-gray-100">
    <div className="mb-6 pt-2 flex flex-wrap justify-center gap-4">
      {Object.keys(servicesData).map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 text-white font-semibold transition-all duration-300 ${
            selectedCategory === category ? "bg-[#089084] scale-105" : "bg-[#012236]"
          } rounded-lg hover:scale-105`}
        >
          {category}
        </button>
      ))}
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {servicesData[selectedCategory].map((service, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: index * 0.01 }}
        >
          <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
            {service.icon}
          </div>
          <span className="text-sm font-medium mt-2 text-center">{service.name}</span>
        </motion.div>
      ))}
    </div>
  </div>
</>
  
  );
};

export default ServiceCards;
