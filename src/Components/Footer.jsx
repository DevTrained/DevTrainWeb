import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const footerStyles = `
    /* Fade-in Animation */
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .footer {
      animation: fadeIn 1s ease-in-out;
      position: relative;
      overflow: hidden;
    }

    /* Gradient Heading Animation */
    .footer-heading {
      background: linear-gradient(90deg, #089084, #24D3B7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradientMove 3s infinite;
    }
    @keyframes gradientMove {
      0% {
        background-position: 0%;
      }
      100% {
        background-position: 100%;
      }
    }

    /* Wave Animation */
    .footer-wave::before {
      content: '';
      position: absolute;
      top: -20px;
      left: 0;
      width: 100%;
      height: 50px;
      background: url('https://svgshare.com/i/WgA.svg') repeat-x;
      animation: wave 10s linear infinite;
    }
    @keyframes wave {
      0% {
        background-position: 0;
      }
      100% {
        background-position: 1000px;
      }
    }

    /* Social Icons Bounce */
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }
    .social-icon:hover {
      animation: bounce 0.5s ease-in-out;
      color: #089084;
    }

    /* Address Card Styling */
    .address-card {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }
    .address-card img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      margin-right: 1rem;
      border-radius: 8px;
    }
    .address-card p {
      margin: 0;
      line-height: 1.4;
    }
  `;

  return (
    <div>
      {/* Add style to dynamically */}
      <style>{footerStyles}</style>
      <footer className="footer footer-wave bg-gray-200 text-black font-poppins">
      {/* <div className="absolute inset-0 bg-[#012236] opacity-20"></div> */}
        <div className="px-6 sm:px-8 md:px-4 lg:px-7 xl:px-7" data-aos="fade-up">
          {/* Top section with logo and links */}
          <div className="flex flex-col md:flex-row md:justify-between lg:space-x-8">
            {/* Logo and description */}
            <div
              className=" flex flex-col items-center  sm:items-start  w-full md:w-1/3 text-center md:text-left lg:items-start lg:w-1/3 xl:w-1/4"
              data-aos="fade-up"
            >
              <img
                className="h-32 sm:h-32 md:h-32 xl:h-52 lg:ml-0 xl:ml-0"
                src="/Assets/Images/i2.png"
                alt="DevTrain"
              />
              <div className="w-full flex sm:items-start md:items-start md:justify-start sm:justify-start text-center items-center justify-center ">
                <div className="sm:text-lg  md:text-left md:text-[1rem] lg:text-md xl:text-[1rem]">
                  <p className=" md:w-96   sm:pl-0  pl-0 " >
                  <strong> Tech Consultancy-Marketing-Trainings</strong> <br /> </p>
                  <p className="w-[88%]   text-center  sm:text-justify pl-0 sm:pl-0"  >
                  Transform your business with Devtrain SMC Pvt Ltd. We offer digital marketing, custom software development, AWS cloud integration, Mobile/Web app development, LLM model training, and staff augmentation in USA, UK, USA, and Pakistan.</p>
              </div>
              </div>
            </div> 

            {/* Navigation Links */}
            <div
              className="flex flex-col sm:items-start md:pl-8 md:text-[1rem] md:w-32 mt-12 mb-8 lg:mb-0 xl:mt-16"
              data-aos="fade-up"
            >
           <h3
  className="bg-[#089084] bg-clip-text text-transparent text-xl sm:text-lg md:text-xl lg:text-2xl font-bold "
>
  Sitemap
</h3>
              <div className="relative flex items-center ">
            {/* Vertical Line with Balls */}
            <div className="flex flex-row ml-4 top-0 gap-4">
              {/* First Vertical Line with Ball */}
              <div className="h-12 flex ml-20 justify-center rotate-90 relative">
                {/* Line */}
                <div className="w-1 h-32 bg-[#F7AB0A] absolute"></div>
                {/* Dot */}
                <div className="w-4 h-4 border-2 border-[#F7AB0A] bg-black rounded-full relative top-0 transform animate-move-down"></div>
              </div>
            </div>
          </div>
              <ul className="space-y-2 sm:text-left">
                <li>
                  <Link to="/" className="hover:text-[#089084]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#089084]">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/Portfolio" className="hover:text-[#089084]">
                    Portfolio
                  </Link>
                </li>
                <li>
                <Link to="/Services" className="hover:text-[#089084]">
                    Services
                  </Link>
                  
                </li>
                <li>
                <Link to="/Trainings" className="hover:text-[#089084]">
                    Trainings
                  </Link>
                 
                </li>
                <li>
                  
                  <Link to="/Careers" className="hover:text-[#089084]">
                    Careers
                  </Link>
                </li>
                <li>
                
                  <Link href="Aboutus" className="hover:text-[#089084]">
                    About Us
                  </Link>
                </li>
                <li>
                <Link to="/Contactus" className="hover:text-[#089084]">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
           
            
            <div
              className="flex flex-col md:mt-12 md:pl-5 md:w-60 mb-8 xl:mt-16"
              data-aos="fade-up"
            >
           <h3
  className="bg-[#089084] bg-clip-text text-transparent text-xl sm:text-lg md:text-xl lg:text-2xl font-bold "
>
  Services
</h3>
              <div className="relative flex items-center ">
            {/* Vertical Line with Balls */}
            <div className="flex flex-row ml-4 top-0 gap-4">
              {/* First Vertical Line with Ball */}
              <div className="h-12 flex ml-20 justify-center rotate-90 relative">
                {/* Line */}
                <div className="w-1 h-32 bg-[#F7AB0A] absolute"></div>
                {/* Dot */}
                <div className="w-4 h-4 border-2 border-[#F7AB0A] bg-black rounded-full relative top-0 transform animate-move-down"></div>
              </div>
            </div>
          </div>
          <ul className="space-y-2 item-start xl:items-center sm:text-left">
              <li>
                  <a href="/WebApplication" className="hover:text-[#089084]">
                    Wordpress
                  </a>
                </li>
                <li>
                  <a href="/ECommerce" className="hover:text-[#089084]">
                    E-Commerce
                  </a>
                </li>
                
                <li>
                  <a href="/WebApplication" className="hover:text-[#089084]">
                    Semantic SEO
                  </a>
                </li>
                <li>
                  <a href="/AI_Consultancy" className="hover:text-[#089084]">
                    AI Consultancy
                  </a>
                </li>
                <li>
                  <a href="/Cloud_Integration" className="hover:text-[#089084]">
                    Cloud Integration
                  </a>
                </li>
                
               
                <li>
                  <a href="/DigitalMarketing" className="hover:text-[#089084]">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="/MobileApplicationDevelopment" className="hover:text-[#089084]">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="/WebApplication" className="hover:text-[#089084]">
                    Web App Development
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact and Addresses Section */}
            <div
              className=" flex-col md:flex-col md:hidden lg:block xl:block sm:block block sm:items-start md:w-1/3 md:mt-12 xl:mt-16"
              data-aos="fade-up"
            >
              <h3
  className="bg-[#089084] bg-clip-text text-transparent text-xl sm:text-lg md:text-xl lg:text-2xl font-bold "
>
  Contact Us
</h3>

              <div className="relative flex items-center ">
            {/* Vertical Line with Balls */}
            <div className="flex flex-row ml-4 top-0 gap-4">
              {/* First Vertical Line with Ball */}
              <div className="h-12 flex ml-20 justify-center rotate-90 relative">
                {/* Line */}
                <div className="w-1 h-32 bg-[#F7AB0A] absolute"></div>
                {/* Dot */}
                <div className="w-4 h-4 border-2 border-[#F7AB0A] bg-black rounded-full relative top-0 transform animate-move-down"></div>
              </div>
            </div>
          </div>

              {/* Address Cards */}
              <div className="address-card">
                <img className="object-cover !h-24 !w-24" src="/Assets/Images/London-Devtrain.png" alt="UK Office" />
                <div>
                  <p className="text-[#012236]"><strong>UK Office</strong></p>
                  <p className="md:text-sm  lg:text-base xl:text-base" >Bayswater Grove, Harehills, Leeds LS8 5LL, Uk</p>
                  <p>+44 7534 113666</p>
                </div>
              </div>

              <div className="address-card flex flex-row sm:flex-row  md:flex-row   lg:flex-row xl:flex-row ">
                <img className="object-cover !h-24 !w-24 " src="/Assets/Images/Dubai-Devtrain.png" alt="Dubai Office" />
                <div>
                  <p  className="text-[#012236]" ><strong>Dubai Office</strong></p>
                  <p className="" >K-16, Greece cluster, International City, Dubai
                  </p>
                  <p>+971 58575 7654</p>
                </div>
              </div>
              <div className="address-card  flex items-center">
                
    <img className=" object-cover !h-24 !w-24 " src="/Assets/Images/Pakistan-Devtrain.png" alt="Pakistan Office" />
    
    <div className="pl-1">
        <p className="text-[#012236]" ><strong>Pakistan Office</strong></p>
        <p>300-R Johar Town Lahore, Pakistan</p>
        <p>+92 308 7772529</p>
    </div>
</div>

             <div className="flex space-x-8 justify-center md:justify-center mt-10 sm:mt-5">
  <a
    href="https://www.facebook.com/devtrain.co"
    className="social-icon text-blue-600 hover:text-blue-800"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-facebook-f text-2xl"></i>
  </a>
  <a
    href="https://www.instagram.com/devtrain.co?igsh=NnUxZnhocjVqa3d3"
    className="social-icon text-pink-500 hover:text-pink-700"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-instagram text-2xl"></i>
  </a>
  <a
    href="https://www.linkedin.com/company/teamdevtrain/"
    className="social-icon text-blue-700 hover:text-blue-900"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-linkedin-in text-2xl"></i>
  </a>
  <a
    href="https://www.tiktok.com/@devtrain.co?_t=8sZZhCRT2ET&_r=1"
    className="social-icon text-black hover:text-gray-700"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-tiktok text-2xl"></i>
  </a>
  <a
    href="https://youtube.com/@dev_train"
    className="social-icon text-red-600 hover:text-red-800"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-youtube text-2xl"></i>
  </a>
</div>

            </div>
          </div>
        </div>

        {/* Address */}
        <div className="hidden md:block lg:hidden xl:hidden flex-col items-center md:items-start xl:flex-row xl:justify-between xl:space-x-8 xl:mt-16"
  data-aos="fade-up"
>  
<div className=" w-full" >
<div className="mb-6 xl:mb-0 flex justify-center items-center ">
    <h3 className="footer-heading text-3xl  font-bold mb-4 text-center">
      Contact Us
    </h3>
  </div>
</div>
 

  {/* Address Cards Row */}
  <div className="flex flex-wrap justify-between px-12 w-full">
    {/* UK Office */}
    <div className="address-card flex flex-col items-center xl:items-start">
      <img className="object-cover !h-24 !w-24 mb-4" src="/Assets/Images/London-Devtrain.png" alt="UK Office" />
      <div className="w-48 " >
        <p className="font-semibold text-lg text-[#012236] text-center mb-1">UK Office</p>
        <p className="md:text-sm lg:text-base xl:text-base text-center xl:text-left">
          Bayswater Grove, Harehills, Leeds LS8 5LL, UK
        </p>
        <p className="mt-2 text-center xl:text-left">+44 7534 113666</p>
      </div>
    </div>

    {/* Dubai Office */}
    <div className="address-card flex flex-col items-center xl:items-start">
      <img className="object-cover !h-24 !w-24 mb-4" src="/Assets/Images/Dubai-Devtrain.png" alt="Dubai Office" />
      <div className="w-48" >
        <p className="font-semibold text-center text-lg text-[#012236] mb-1">Dubai Office</p>
        <p className="md:text-sm lg:text-base xl:text-base text-center xl:text-left">
          K-16, Greece cluster, International City, Dubai
        </p>
        <p className="mt-2 text-center xl:text-left">+971 58575 7654</p>
      </div>
    </div>

    {/* Pakistan Office */}
    <div className="address-card flex flex-col items-center xl:items-start">
      <img className="object-cover !h-24 !w-24 mb-4" src="/Assets/Images/Pakistan-Devtrain.png" alt="Pakistan Office" />
      <div className="w-48">
        <p className="font-semibold text-[#012236] text-center text-lg mb-1">Pakistan Office</p>
        <p className="md:text-sm lg:text-base xl:text-base text-center xl:text-left">
          300-R Johar Town Lahore, Pakistan
        </p>
        <p className="mt-2 text-center xl:text-left">+92 308 7772529</p>
      </div>
    </div>
  </div>

  {/* Social Icons */}
  <div className="flex justify-center w-full">
  <div className="flex space-x-12 mt-6 xl:mt-0 xl:w-1/4 ">
    <a
      href="https://www.facebook.com/devtrain.co"
      className="social-icon text-blue-600 hover:text-blue-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-facebook-f text-2xl"></i>
    </a>
    <a
      href="https://www.instagram.com/devtrain.co?igsh=NnUxZnhocjVqa3d3"
      className="social-icon text-pink-500 hover:text-pink-700"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-instagram text-2xl"></i>
    </a>
    <a
      href="https://www.linkedin.com/company/teamdevtrain/"
      className="social-icon text-blue-700 hover:text-blue-900"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-linkedin-in text-2xl"></i>
    </a>
    <a
      href="https://www.tiktok.com/@devtrain.co?_t=8sZZhCRT2ET&_r=1"
      className="social-icon text-black hover:text-gray-700"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-tiktok text-2xl"></i>
    </a>
    <a
      href="https://youtube.com/@dev_train"
      className="social-icon text-red-600 hover:text-red-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-youtube text-2xl"></i>
    </a>
  </div>
</div>

</div>



        {/* Footer Bottom */}
        <div className="py-4 mt-8 lg:mt-12 md:mt-8 ">
          <p className="text-center text-sm md:text-base px-2 lg:text-lg">
          <hr className="border-t border-black opacity-20 my-4" />
            Copyright 2024 <span className="text-[#24D3B7]">devtrain</span> | Developed By{' '}
            <span className="text-[#24D3B7]">Devtrain SMC PVT LTD</span>. All Rights Reserved
          </p>
        </div>
        <style jsx>{`
        @keyframes moveDown {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(100px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-move-down {
          animation: moveDown 3s ease-in-out infinite;
        }

        /* Progress Bar Animation */
        .progress-bar {
          transition: width 2s ease-out; /* Smooth transition for width */
        }
        }
      `}</style>
      </footer>
     
    </div>
  );
};

export default Footer;
