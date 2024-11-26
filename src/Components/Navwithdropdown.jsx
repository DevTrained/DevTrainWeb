import React, { useState, useEffect } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [hoveredSubItem, setHoveredSubItem] = useState(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollTop = window.scrollY;
        const progress = (scrollTop / scrollHeight) * 100;

        setScrollProgress(progress);
    };

    const toggleDropdownMobile = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const menuItems = [
        { title: "Home", dropdown: ["Overview", "Features", "Updates"] },
        { title: "Services", dropdown: ["Consulting", "Development", "Design"] },
        { title: "Trainings", dropdown: ["Web Development", "React", "Node.js"] },
        { title: "Blogs", dropdown: ["Tech News", "Tutorials", "Case Studies"] },
        { title: "Careers", dropdown: ["Open Positions", "Internships"] },
        { title: "Hire Us", dropdown: ["Open Positions", "Internships"] },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${isScrolled ? "bg-[#089084]" : "bg-transparent"}`}>
            {/* Scroll Progress Bar */}
            <div className="fixed top-[15.1%] left-0 w-full h-1 bg-[#F7AB0A] z-20" style={{ width: `${scrollProgress}%` }} />

            <div className="h-24 p-4 flex items-center justify-end md:gap-0 lg:gap-4 xl:gap-4 2xl:gap-12">
                {/* Logo */}
                <img className="absolute sm:h-20 h-20 md:h-24 lg:h-28 xl:h-28 left-4" src="./public/Assets/Images/i1.png" alt="Logo" />

                {/* Mobile Hamburger Icon */}
                <div className="md:hidden flex items-center">
                    <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
                        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`} />
                    </button>
                </div>

                {/* Menu Links for Larger Screens */}
                <div className="hidden md:flex md:items-center gap-y-4">
                    {menuItems.map((item, index) => (
                        <div key={item.title} className="relative group">
                            <a href="#" className="text-white px-4 py-2 text-lg md:text-[1rem] lg:text-lg block">
                                {item.title}
                            </a>

                            {/* Dropdown Menu for Larger Screens */}
                            {item.dropdown.length > 0 && (
                                <div className="absolute left-0 shadow-lg rounded-lg mt-0 py-2 w-48 bg-gradient-to-r from-[#175255] hidden group-hover:block">
                                    {item.dropdown.map((subItem) => (
                                        <a key={subItem} href="#" className="block px-4 py-2 text-white text-center hover:bg-[#3aafa9] rounded-lg">
                                            {subItem}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu with Dropdowns */}
                <div className={`md:hidden ${isOpen ? "flex flex-col h-screen absolute top-24 left-0 right-0 bg-[#012236]" : "hidden"}`}>
                    {menuItems.map((item, index) => (
                        <div key={item.title} className="relative group">
                            <div className="flex justify-between items-center px-4 py-2">
                                <a href="#" className="text-white text-lg">{item.title}</a>

                                {/* Down Arrow Icon for Dropdown Items */}
                                {item.dropdown.length > 0 && (
                                    <button onClick={() => toggleDropdownMobile(index)} className="text-white">
                                        {activeDropdown === index ? "▲" : "▼"}
                                    </button>
                                )}
                            </div>
                            
                            {/* Dropdown Items (Mobile) */}
                            {activeDropdown === index && (
                                <div className="flex flex-col bg-[#175255] px-4 py-2">
                                    {item.dropdown.map((subItem) => (
                                        <a key={subItem} href="#" className="text-white py-1 hover:bg-[#3aafa9] rounded-lg">
                                            {subItem}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Phone Number Button */}
                <div className="items-center xl:block lg:block hidden">
                    <button className="relative border-2 border-white rounded-full xl:h-12 lg:h-12 md:h-12 text-white py-2 px-4 overflow-hidden group">
                        <span className="text-lg font-semibold relative z-10">+92 3223234300</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#175255] bg-[#012236] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
