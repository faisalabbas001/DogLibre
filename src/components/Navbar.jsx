import React from "react";
import Logo from "../../public/navlogo.png";

const Navbar = () => {
   

  return (
    <div className="relative h-[150px] flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32">
   
    <img 
      src={Logo} 
      alt="Logo" 
      className="w-[120px] h-[40px] sm:w-[140px] sm:h-[50px] md:w-[171px] md:h-[58px]" 
    />

   
    <div className="flex gap-2 items-center">
    
      <button 
        className={` sm:block w-[100px] sm:w-[120px] md:w-[151px] h-[38px] bg-white text-black rounded-full hover:bg-blue-600 transition`}
      >
        Connect
      </button>

 
      <button 
        className="text-2xl focus:outline-none rounded-full p-2  bg-white text-black"
      
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
    </div>
  </div>

  
  );
};

export default Navbar;
