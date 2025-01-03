import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navbarColor, setNavbarColor] = useState("bg-transparent");
  const location = useLocation();

  // Define valid routes for 404 detection
  const validRoutes = [
    "/",
    "/Services", "/MobileApplicationDevelopment", "/DigitalMarketing","/ECommerce", "/WebApplication", 
    "/Portfolio", "/SEO", "/WordPress", "/TechTrainings" , "/Portfolio", "/CoinCraft",
    "/Trainings", "/DocMagnet", "/OrderManagement",
    "/Careers", "/FlashTaxi","/GreenEats", "/PortfolioSections",
    "/ContactUs", "/AboutUs", "/Trainings",
    "/Cloud_Integration"
  ];
  const is404Page = !validRoutes.includes(location.pathname); // Check if the route is invalid

  // Debugging location.pathname
  console.log("Current Path:", location.pathname, "| is404Page:", is404Page);

  // Handle scroll events for changing navbar color and showing scroll progress
  const handleScroll = () => {
    if (!is404Page) {
      if (window.scrollY > 0) {
        setIsScrolled(true); // When scrolling
      } else {
        setIsScrolled(false); // When at the top
      }

      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    }
  };

  // Set the navbar color dynamically based on route and scroll state
  useEffect(() => {
    if (is404Page) {
      setNavbarColor("bg-[#089084]"); // Blue color for 404 page
    } else if (isOpen) {
      setNavbarColor("bg-[#089084]"); // Blue color when burger menu is open
    } else if (isScrolled) {
      setNavbarColor("bg-[#089084]"); // Blue color when scrolled on other pages
    } else {
      setNavbarColor("bg-transparent"); // Transparent by default
    }
  }, [is404Page, isOpen, isScrolled]);

  // Close navbar on route change
  useEffect(() => {
    setIsOpen(false); // Close the menu when the route changes
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [is404Page]);

  // Menu items
  const menuItems = [
    { title: "Home", link: "/" },
    { title: "Services", link: "/Services" },
    { title: "Portfolio", link: "/Portfolio" },
    { title: "Trainings", link: "/Trainings" },
    { title: "Careers", link: "/Careers" },
    { title: "Contact Us", link: "/ContactUs" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${navbarColor}`}>
      {/* Scroll Progress Bar */}
      <div className="h-20 lg:h-24 absolute flex items-end justify-end w-full">
        <div
          className="fixed left-0 w-full h-1 bg-[#F7AB0A] z-20"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navbar Content */}
      <div className="h-20 xl:h-24 lg:h-24 p-4 flex items-center justify-end md:gap-4">
        {/* Logo */}
        <img
          className="absolute sm:h-36 h-32 md:h-44 lg:h-48 xl:h-48 left-1 sm:left-4 z-30"
          src="/Assets/Images/Devtrain-Logo1.png"
          alt="Devtrained-Logo"
        />

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden flex items-center z-40">
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            <i className={`fas ${isOpen ? "fa-times text-4xl" : "fa-bars"} text-3xl`} />
          </button>
        </div>

        {/* Menu Links for Larger Screens */}
        <div className="hidden lg:flex lg:items-center gap-y-4 z-30">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="relative text-white px-4 py-2 text-lg lg:text-[1.05rem] xl:text-lg inline-block group"
            >
              {item.title}
              {/* Underline Effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#f7ab0a] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out pl-2 sm:pl-5 z-40 space-y-2 overflow-hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } absolute h-screen top-20 left-0 right-0 bg-[#012236]`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="text-white overflow-hidden text-lg px-4 py-2 block hover:underline hover:underline-offset-4 hover:decoration-[#012236] hover:decoration-[3px]"
            >
              {item.title}
            </Link>
          ))}

          {/* Email Section */}
          <div className="text-white text-center mx-4 mt-6">
            <p className="text-lg flex items-center justify-start gap-2">
              <i className="fas fa-envelope text-xl text-[#f7ab0a]"></i> {/* Email Icon */}
              <a href="mailto:devtrained@gmail.com" className="hover:underline ">
                devtrained@gmail.com
              </a>
            </p>
          </div>

          {/* Full-Width Button */}
          <div className="text-center mx-4 mt-6">
            <button className="w-full bg-[#089084] text-white py-3 rounded-lg text-xl font-semibold hover:bg-[#175255] hover:text-white transition-all duration-300">
              GET ESTIMATES
              <br />
              <span className="text-md font-normal">Response in 24 hours</span>
            </button>
          </div>
        </div>

        {/* Phone Number Button for Larger Screens */}
        <div className="items-center xl:block lg:block hidden z-30">
          <button className="relative border-2 border-white rounded-full xl:h-12 lg:h-12 md:h-12 text-white py-2 px-3 overflow-hidden group">
            <span className="xl:text-lg text-md font-semibold relative z-10 flex items-center gap-2">
              <a
                href="https://wa.me/923087772529"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <i className="fab fa-whatsapp text-2xl text-green-500"></i>
                +92 308 777 2529
              </a>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#175255] bg-[#012236] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
