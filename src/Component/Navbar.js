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

  const menuItems = [
    { name: "HOME", link: "#" },
    { name: "SHOP", link: "#" },
    { name: "PAGES", link: "#" },
    { name: "BLOG", link: "#" },
    { name: "SALE", link: "#" },
    { name: "BUY THEME!", link: "#" },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-3 border-b border-gray-200">
        {/* Hamburger Menu for Mobile (Placed on the left side, next to the logo) */}
        <button
          className="md:hidden text-2xl text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu state
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Logo and Hamburger together */}
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

      {/* Mobile Menu - Slide from Left */}
      <div
        className={`${
          isMenuOpen ? "left-0" : "-left-full"
        } absolute top-0 z-10  bg-white shadow-md w-64 h-96 transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          {menuItems.map((item, index) => (
           <li key={index} className="relative group border border-gray-300 rounded-md">
           <a
             href={item.link}
             className="flex items-center justify-between text-lg font-semibold py-2 px-4 w-full"
           >
             {item.name}
             {item.dropdown && <FiChevronDown />}
           </a>
           {item.dropdown && (
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

        {/* Close button in mobile menu */}
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
          {/* Main Menu */}
          <ul className="flex space-x-6">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <a
                  href={item.link}
                  className="font-semibold flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <FiChevronDown className="text-sm text-gray-600 group-hover:text-gray-800" />
                  )}
                </a>
                {item.dropdown && (
                  <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2 w-40 text-black">
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
