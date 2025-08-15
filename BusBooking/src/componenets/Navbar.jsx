import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 shadow-lg fixed w-full top-0 z-50">
      
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2 left-10  pl-4">
            <img className="h-10 w-10" src="buslogo.svg" alt="Bus Logo" />
            <span className="text-2xl font-bold text-white tracking-wide">
              NextBus
            </span>
          </div>

          {/* Menu Links */}
          <ul className="hidden md:flex gap-6 text-white font-medium pr-4">
            <li>
              <a href="/" className="hover:text-black transition duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:text-black transition duration-200">
                Contact
              </a>
            </li>
            <li>
              <a href="/About" className="hover:text-black transition duration-200">
                About
              </a>
            </li>
            <li>
              <a
                href="/Login"
                className="bg-black px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-200"
              >
                Login
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center pr-4">
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

        </div>
    </nav>
  );
};

export default Navbar;
