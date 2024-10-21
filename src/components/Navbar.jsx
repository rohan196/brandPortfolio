import React, { useState } from 'react';
import { images } from '../constants'; // Import the images correctly

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:h-[70px] w-full bg-box py-3 px-8 flex justify-between items-center rounded-full">
      {/* Logo */}
      <img src={images.logo} alt="Logo" className="object-cover rounded-full" width={45} height={40} />

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-8">
        <a href="#home" className="text-white hover:text-gray-300">Home</a>
        <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
        <a href="#expertise" className="text-white hover:text-gray-300">Expertise</a>
        <a href="#testimonials" className="text-white hover:text-gray-300">Testimonials</a>
      </div>

      {/* Button */}
      <div className="hidden lg:block">
        <button className="bg-brownBtn text-white font-semibold py-2 px-6 rounded-full">
          Let's Connect
        </button>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-box py-6 px-8 flex flex-col space-y-4">
          <a href="#home" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#projects" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#expertise" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Expertise</a>
          <a href="#testimonials" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Testimonials</a>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full mt-4">
            Let's Connect
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
