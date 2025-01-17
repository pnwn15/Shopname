import React, { useState } from "react";
import {
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiChevronDown,
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // สถานะสำหรับจัดการเมนู dropdown

  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "SHOP", link: "/Shop" },
    { 
      name: "PAGES", 
      link: "#", 
      dropdown: [
        { name: "About Us", link: "/About" },
        { name: "Contact Us", link: "/page2" },
        { name: "News", link: "/page3" },
        { name: "Wishlist", link: "/page4" },
        { name: "Delivary Info", link: "/page5" }
      ]
    },
    { 
      name: "BLOG", 
      link: "#", 
      dropdown: [
        { name: "Blog 1", link: "/blog1" },
        { name: "Blog 2", link: "/blog2" },
        { name: "Blog 3", link: "/blog3" },
        { name: "Blog 4", link: "/blog4" },
        { name: "Blog 5", link: "/blog5" }
      ]
    },
    { 
      name: "SALE", 
      link: "#", 
      dropdown: [
        { name: "Sale 1", link: "/sale1" },
        { name: "Sale 2", link: "/sale2" },
        { name: "Sale 3", link: "/sale3" },
        { name: "Sale 4", link: "/sale4" },
        { name: "Sale 5", link: "/sale5" }
      ]
    },
    { name: "BUY THEME!", link: "#" },
  ];

  const handleDropdownClick = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null); // ปิด dropdown หากคลิกซ้ำ
    } else {
      setOpenDropdown(index); // เปิด dropdown
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-3 border-b border-gray-200">
  {/* Hamburger Menu for Mobile */}
  <button
    className="md:hidden text-2xl text-gray-600 h-12 w-12 flex justify-center items-center"
    onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu state
  >
    {isMenuOpen ? <FiX /> : <FiMenu />}
  </button>

  {/* Logo */}
  <div className="flex items-center gap-4">
    <img src="picture/logo.png" alt="Logo" className="h-8" />
  </div>

  {/* Desktop Actions */}
  <div className="md:flex flex items-center space-x-6 text-sm">
    <button className="flex items-center space-x-1">
      <FiUser className="text-xl block" />
      <span className="hidden md:block">Login</span>
    </button>
    <button className="flex items-center space-x-1">
      <FiHeart className="text-xl" />
      <span className="hidden md:block">Wishlist</span>
    </button>
    <button className="flex items-center space-x-1">
      <FiShoppingBag className="text-xl" />
      <span className="hidden md:block">Cart</span>
    </button>
  </div>
</div>


      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "left-0" : "-left-full"
        } absolute top-0 z-10 bg-white shadow-md w-64 h-auto transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              <a
                href={item.link}
                className="flex items-center justify-between text-lg font-semibold py-2 px-4 w-full"
                onClick={() => item.dropdown && handleDropdownClick(index)} // เปิด/ปิด dropdown
              >
                {item.name}
                {item.dropdown && <FiChevronDown />}
              </a>
              {item.dropdown && openDropdown === index && (
                <ul className="mt-2 ml-4 space-y-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex} className="border-b border-gray-200">
                      <a
                        href={subItem.link}
                        className="block text-sm text-gray-700 hover:text-black py-2 px-4"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-600"
          onClick={() => setIsMenuOpen(false)} // Close the menu when clicked
        >
          <FiX />
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block container mx-auto px-4 py-2">
        <nav className="flex justify-between items-center text-sm">
          <ul className="flex space-x-6">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
              <a
                href={item.link}
                className="font-semibold flex items-center space-x-1"
                onClick={(e) => {
                  if (item.dropdown) {
                    e.preventDefault(); // ป้องกันการโหลดหน้าใหม่เฉพาะ dropdown
                    handleDropdownClick(index);
                  }
                }}
              >
                <span>{item.name}</span>
                {item.dropdown && (
                  <FiChevronDown
                    className={`text-sm ml-1 ${openDropdown === index ? "rotate-180" : ""}`}
                  />
                )}
              </a>
              {item.dropdown && openDropdown === index && (
                <ul className="absolute left-0 top-full bg-white shadow-md mt-2 w-40 text-black z-50">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subItem.link}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            
            
            ))}
          </ul>
          <ul className="flex space-x-6">
            <li>
              <button className="flex items-center text-black font-bold space-x-1">
                <span>Search</span>
                <FiSearch className="text-xl" />
              </button>
            </li>
            <li>
              <select className="bg-transparent font-bold text-md">
                <option>Usd $</option>
                <option>EUR €</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
