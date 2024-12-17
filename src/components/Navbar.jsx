import React, { useState, useRef } from "react";
import Logo from "../../public/navlogo.png";
import { FaTwitter, FaGithub } from "react-icons/fa"; 

const Navbar = () => {

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const buttonRef = useRef(null);


  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };


  const handleDropdownContentClick = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div className="relative h-[150px] flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32">
      <img
        src={Logo}
        alt="Logo"
        className="w-[120px] h-[40px] sm:w-[140px] sm:h-[50px] md:w-[171px] md:h-[58px]"
      />

      <div className="flex gap-2 items-center">
        <button
          className="sm:block w-[100px] sm:w-[120px] md:w-[151px] h-[38px] bg-white text-black rounded-full hover:bg-blue-600 transition"
        >
          Connect
        </button>

        {/* Button to toggle dropdown */}
        <button
          ref={buttonRef} 
          className="text-2xl focus:outline-none rounded-full p-2 bg-white text-black"
          onClick={handleDropdownToggle} 
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Dropdown menu */}
        {isDropdownVisible && (
          <div
            className="absolute right-0 mr-5 mt-2 w-[200px] bg-white shadow-lg rounded-lg p-4 border border-gray-200"
            style={{
              top: buttonRef.current?.getBoundingClientRect().bottom + window.scrollY, // Positioning below the button
            }}
          >
            <div className="space-y-4">
              <div onClick={handleDropdownContentClick}>
                <h1 className="font-semibold text-lg cursor-pointer">App</h1>
                <p className="text-gray-700 cursor-pointer">SuperBridge</p>
              </div>

              <div onClick={handleDropdownContentClick}>
                <h1 className="font-semibold text-lg cursor-pointer">Solution</h1>
                <ul className="space-y-1 text-gray-700 cursor-pointer">
                  <li>Rollup</li>
                  <li>Layer Zero</li>
                  <li>Hyper Line</li>
                </ul>
              </div>

              <div onClick={handleDropdownContentClick}>
                <h1 className="font-semibold text-lg cursor-pointer">Support</h1>
                <ul className="space-y-1 text-gray-700 cursor-pointer">
                  <li>Docs</li>
                  <li>Help Center</li>
                </ul>
              </div>

              <div className="flex flex-col " onClick={handleDropdownContentClick}>
                
                {/* Social Media Icons */}
                <div className="flex gap-3 text-xl text-gray-700">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="hover:text-blue-500" />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-gray-800" />
                  </a>
                </div>

                {/* Terms and Privacy */}
                <p className="mt-2 text-sm text-gray-600 cursor-pointer">Terms & Privacy</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
